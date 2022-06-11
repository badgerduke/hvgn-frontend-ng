import { LogLevel } from "angular-auth-oidc-client";

export const environment = {
  production: true,
  baseurl: 'https://api.hvgn.net/prod',
  oidc_authority: 'https://hvgn-auth.auth.us-east-1.amazoncognito.com/',
  oidc_clientId: '<clientId>',
  oidc_postLogoutRedirectUri: 'https://hvgn.net',
  oidc_redirectUrl: 'https://hvgn.net/login/callback',
  oidc_userPoolId: '<userPoolId>',
  oidc_authWellknownEndpointUrl: `https://cognito-idp.us-east-1.amazonaws.com/<userPoolId>/.well-known/openid-configuration`,
  oidc_revoke_endpoint_path: '/oauth2/revoke',
  oidc_logoff_endpoint_path: '/logout',
  oidc_logLevel: LogLevel.Error
};
