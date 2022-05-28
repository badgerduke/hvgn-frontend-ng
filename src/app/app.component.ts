import { NavigationEnd, Router } from '@angular/router';
import { FamilyService } from './family-view/family/family.service';
import { SpinnerService } from './core/spinner.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, delay, filter, Subscription } from 'rxjs';
import { AuthenticatedResult, ConfigUserDataResult, OidcSecurityService, UserDataResult } from 'angular-auth-oidc-client';
import { AuthService } from './auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  spinnerState = false;
  currentFamily!: number;
  subscription: Subscription = new Subscription();
  isMenuCollapsed = true;
  authenticated = false;
  username!: string;

  constructor(private spinnerService: SpinnerService,
    private familyService: FamilyService,
    private oidcSecurityService: OidcSecurityService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.setUpSpinnerSubscription();
    this.setUpCurrentFamilySubscription();
    this.setUpCheckAuthSubscription();
    this.setUpIsAuthenticatedSubscription();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setUpSpinnerSubscription(): void {
    this.subscription.add(this.spinnerService.spinner$.pipe(delay(0)).subscribe(
      (newSpinnerState) => this.spinnerState = newSpinnerState
    ));
  }

  setUpCurrentFamilySubscription(): void {
    this.subscription.add(this.familyService.currentFamilyId$.subscribe(
      (newCurrentFamilyId) => this.currentFamily = newCurrentFamilyId
    ));
  }

  setUpIsAuthenticatedSubscription(): void {
    this.subscription.add(this.oidcSecurityService.isAuthenticated$.subscribe(
      (auth: AuthenticatedResult) => {
        if (auth.isAuthenticated) {
          this.authenticated = true;
        }
        else {
          this.authenticated = false;
        }
        sessionStorage.removeItem('lastStateIsLoginCallback');
      }
    ));
  }

  setUpCheckAuthSubscription(): void {
    this.subscription.add(this.oidcSecurityService.checkAuth().subscribe(({isAuthenticated, userData, accessToken, idToken, configId}) => {
      if (isAuthenticated) {
        let sessionData = sessionStorage.getItem(configId);
        if (sessionData) {
          let sessionDataJSON: any = JSON.parse(sessionData);
          const revokationEndpoint = environment.oidc_authority + environment.oidc_revoke_endpoint_path;
          if (!sessionDataJSON['authWellKnownEndPoints']['revocationEndpoint']) {
            sessionDataJSON['authWellKnownEndPoints']['revocationEndpoint'] = revokationEndpoint;
            sessionData = JSON.stringify(sessionDataJSON);
            sessionStorage.setItem(configId, sessionData);
          }
        }
    }
    }));
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }

  logout(): void {

    this.authenticated = false;
    this.oidcSecurityService.logoffAndRevokeTokens().subscribe(
      {
        next: () => {
          this.authService.logoff(
            this.oidcSecurityService.getConfiguration().authority!,
            this.oidcSecurityService.getConfiguration().clientId!,
            this.oidcSecurityService.getConfiguration().postLogoutRedirectUri!
          );
          this.oidcSecurityService.logoffLocal();
        },
        error: (error: any) => console.log(error),
        complete: () => {}
      }
    )
  }
}
