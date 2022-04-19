import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  logoff(authority: string, clientId: string, logoutUrl: string): void {
    let params = new HttpParams();
    params = params.append('client_id', clientId);
    params = params.append('logout_uri', encodeURIComponent(logoutUrl));

    window.location.href = `${authority}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUrl)}`;
  }
}
