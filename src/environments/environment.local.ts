import { LogLevel } from "angular-auth-oidc-client";

export const environment = {
  production: false,
  baseurl: 'https://api.hvgn.net/dev',
  oidc_authority: 'https://dev-cognito.hvgn.net',
  oidc_clientId: '5at6f5eefvc9vitsn8nspdfk43',
  oidc_postLogoutRedirectUri: 'http://localhost:4200',
  oidc_redirectUrl: 'http://localhost:4200/login/callback',
  oidc_userPoolId: 'us-east-1_a7FcqD3ML',
  oidc_authWellknownEndpointUrl: `https://cognito-idp.us-east-1.amazonaws.com/us-east-1_a7FcqD3ML/.well-known/openid-configuration`,
  oidc_revoke_endpoint_path: '/oauth2/revoke',
  oidc_logoff_endpoint_path: '/logout',
  oidc_logLevel: LogLevel.Error
};
