import { LogLevel } from "angular-auth-oidc-client";

export const environment = {
  production: false,
  baseurl: 'https://api.hvgn.net/dev',
  oidc_authority: 'https://offeringsolutions-sts.azurewebsites.net',
  oidc_clientId: '',
  oidc_postLogoutRedirectUri: '',
  oidc_redirectUrl: '',
  oidc_logLevel: LogLevel.Debug
};
