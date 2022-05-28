import { LogLevel } from "angular-auth-oidc-client";

export const environment = {
  production: false,
  baseurl: 'https://api.hvgn.net/dev',
  oidc_authority: 'https://hvgn-dev-auth.auth.us-east-1.amazoncognito.com/us-east-1_zJzxAOK3a',
  oidc_clientId: '6s90lv62njon6j5vcitnk3rm4s',
  oidc_postLogoutRedirectUri: 'http://localhost:4200',
  oidc_redirectUrl: 'http://localhost:4200/login/callback',
  oidc_userPoolId: 'us-east-1_zJzxAOK3a',
  oidc_authWellknownEndpointUrl: `https://cognito-idp.us-east-1.amazonaws.com/us-east-1_zJzxAOK3a/.well-known/openid-configuration`,
  oidc_revoke_endpoint_path: '/oauth2/revoke',
  oidc_logoff_endpoint_path: '/logout',
  oidc_logLevel: LogLevel.Error
};
