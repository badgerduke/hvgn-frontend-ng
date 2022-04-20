import { LogLevel } from "angular-auth-oidc-client";

export const environment = {
  production: true,
  baseurl: 'https://api.hvgn.net/prod',
  oidc_authority: 'https://offeringsolutions-sts.azurewebsites.net',
  oidc_clientId: '',
  oidc_postLogoutRedirectUri: '',
  oidc_redirectUrl: '',
  oidc_userPoolId: 'us-east-1_7R0XneWgA',
  oidc_authWellknownEndpointUrl: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_7R0XneWgA/.well-known/openid-configuration',
  oidc_revoke_endpoint_path: '/oauth2/revoke',
  oidc_logoff_endpoint_path: '/logout',
  oidc_logLevel: LogLevel.Error
};
