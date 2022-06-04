import { OidcSecurityService } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseurlInterceptor implements HttpInterceptor {

  constructor(private oidcSecurityService: OidcSecurityService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let apiReq;
    if (req.responseType === 'blob' ||
      (req.url.indexOf('hvgn') !== -1 && req.url.indexOf('auth') !== -1) ||
      req.url.indexOf('cognito-idp') !== -1) {
      apiReq = req.clone();
    }
    else {
      apiReq = req.clone({ url: `${environment.baseurl}/${req.url}`, setHeaders: {'Authorization': `Bearer ${this.oidcSecurityService.getAccessToken()}`} });
    }
    return next.handle(apiReq);
  }
}
