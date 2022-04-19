import { LogLevel } from "angular-auth-oidc-client";

export const environment = {
  production: false,
  baseurl: 'https://api.hvgn.net/dev',
  oidc_authority: 'https://hvgn.auth.us-east-1.amazoncognito.com',
  oidc_clientId: '5j3dot40m88jiq3levn7egcm1t',
  oidc_postLogoutRedirectUri: 'http://localhost:4200',
  oidc_redirectUrl: 'http://localhost:4200/login/callback',
  oidc_userPoolId: 'us-east-1_7R0XneWgA',
  oidc_authWellknownEndpointUrl: `https://cognito-idp.us-east-1.amazonaws.com/us-east-1_7R0XneWgA/.well-known/openid-configuration`,
  oidc_logLevel: LogLevel.Error
};
