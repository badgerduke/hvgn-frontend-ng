import { AuthOidcRoutingModule } from './auth-oidc-routing.module';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from 'angular-auth-oidc-client';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { LoginCallbackComponent } from './login-callback/login-callback.component';



@NgModule({
  declarations: [
    ForbiddenComponent,
    UnauthorizedComponent,
    LoginCallbackComponent
  ],
  imports: [
    AuthModule.forRoot({
      config: {
        triggerAuthorizationResultEvent: true,
        postLoginRoute: '/home',
        forbiddenRoute: '/forbidden',
        unauthorizedRoute: '/unauthorized',
        logLevel: environment.oidc_logLevel,
        historyCleanupOff: false,
        authority: environment.oidc_authority,
        redirectUrl: environment.oidc_redirectUrl,
        postLogoutRedirectUri: environment.oidc_postLogoutRedirectUri,
        clientId: environment.oidc_clientId,
        scope: 'openid profile email aws.cognito.signin.user.admin phone',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        tokenRefreshInSeconds: 60,
        authWellknownEndpointUrl: environment.oidc_authWellknownEndpointUrl,
      },
    }),
    CommonModule,
    AuthOidcRoutingModule
  ]
})
export class AuthOidcModule { }
