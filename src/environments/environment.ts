import { LogLevel } from 'angular-auth-oidc-client';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseurl: 'https://api.hvgn.net/dev',
  oidc_authority: 'https://hvgn-dev-auth.auth.us-east-1.amazoncognito.com/',
  oidc_clientId: '<clientId>',
  oidc_postLogoutRedirectUri: 'https://dev.hvgn.net',
  oidc_redirectUrl: 'https://dev.hvgn.net/login/callback',
  oidc_userPoolId: '<userPoolId>',
  oidc_authWellknownEndpointUrl: `https://cognito-idp.us-east-1.amazonaws.com/<userPoolId>/.well-known/openid-configuration`,
  oidc_revoke_endpoint_path: '/oauth2/revoke',
  oidc_logoff_endpoint_path: '/logout',
  oidc_logLevel: LogLevel.Error
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
