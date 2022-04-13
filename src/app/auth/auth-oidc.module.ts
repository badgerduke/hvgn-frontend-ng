import { AuthOidcRoutingModule } from './auth-oidc-routing.module';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';



@NgModule({
  declarations: [
    ForbiddenComponent,
    UnauthorizedComponent
  ],
  imports: [
    AuthModule.forRoot({
      config: {
        triggerAuthorizationResultEvent: true,
        postLoginRoute: '/home',
        forbiddenRoute: '/forbidden',
        unauthorizedRoute: '/unauthorized',
        logLevel: environment.oidc_logLevel,
        historyCleanupOff: true,
        authority: environment.oidc_authority,
        redirectUrl: environment.oidc_redirectUrl,
        postLogoutRedirectUri: environment.oidc_postLogoutRedirectUri,
        clientId: environment.oidc_clientId,
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
      },
    }),
    CommonModule,
    AuthOidcRoutingModule
  ]
})
export class AuthOidcModule { }
