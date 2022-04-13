import { LogLevel } from "angular-auth-oidc-client";

export const environment = {
  production: true,
  baseurl: 'https://api.hvgn.net/prod',
  oidc_authority: 'https://offeringsolutions-sts.azurewebsites.net',
  oidc_clientId: '',
  oidc_postLogoutRedirectUri: '',
  oidc_redirectUrl: '',
  oidc_logLevel: LogLevel.Error
};
