import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OidcSecurityService, AuthenticatedResult } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private oidcSecurityService: OidcSecurityService ) { }

  logoff(authority: string, clientId: string, logoutUrl: string): void {
    let params = new HttpParams();
    params = params.append('client_id', clientId);
    params = params.append('logout_uri', encodeURIComponent(logoutUrl));

    window.location.href = `${authority}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUrl)}`;
  }

  // According to Cognito documentation, this will revoke both refresh token and all access tokens.
  revokeRefreshToken(): Observable<any> {

    let params = new HttpParams();
    params = params.append('client_id', this.oidcSecurityService.getConfiguration().clientId!);
    params = params.append('token', this.oidcSecurityService.getRefreshToken());
    params = params.append('token_hint_type', 'refresh_token');

    return this.httpClient.post(`${this.oidcSecurityService.getConfiguration().authority}oauth2/revoke`, params)
  }
}
