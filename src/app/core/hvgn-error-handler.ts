import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HvgnErrorHandler implements ErrorHandler {

  constructor(private oidcSecurityService: OidcSecurityService) { }

  handleError(error: Error) {
    if (error.message.indexOf('could not find matching config for state') > -1) {
      this.oidcSecurityService.authorize();
    }
  }
}
