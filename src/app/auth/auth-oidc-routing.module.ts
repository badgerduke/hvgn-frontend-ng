import { LoginCallbackComponent } from './login-callback/login-callback.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';

const routes: Routes = [
  { path: 'login/callback', component: LoginCallbackComponent },
  { path: 'forbidden', component: ForbiddenComponent, canActivate: [AutoLoginPartialRoutesGuard]  },
  { path: 'unauthorized', component: UnauthorizedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthOidcRoutingModule { }
