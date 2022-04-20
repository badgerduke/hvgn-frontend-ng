import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.scss']
})
export class LoginCallbackComponent implements OnInit, OnDestroy {


  subscription: Subscription = new Subscription();
  authenticated!: boolean;

  constructor(private oidcSecurityService: OidcSecurityService,
              private router: Router) { }


  ngOnInit(): void {
    this.subscription.add(this.oidcSecurityService.isAuthenticated$.subscribe(({ isAuthenticated }) => {
      this.authenticated = isAuthenticated;
      if (isAuthenticated) {
        if (this.oidcSecurityService.getConfiguration().redirectUrl?.indexOf('login/callback')  !== -1) {
          this.router.navigate(['/']);
        }
        else {
          this.router.navigate([this.oidcSecurityService.getConfiguration().redirectUrl]);
        }
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
