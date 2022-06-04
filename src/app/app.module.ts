import { LoadingInterceptor } from './core/loading-interceptor';
import { HomeViewModule } from './home-view/home-view.module';
import { FamilyViewModule } from './family-view/family-view.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutViewModule } from './about-view/about-view.module';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseurlInterceptor } from './core/baseurl-interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthOidcModule } from './auth/auth-oidc.module';
import { HvgnErrorHandler } from './core/hvgn-error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthOidcModule,
    BrowserModule,
    FamilyViewModule,
    HomeViewModule,
    AboutViewModule,
    CoreModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: HvgnErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseurlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
