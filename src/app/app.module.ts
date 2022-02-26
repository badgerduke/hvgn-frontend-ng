import { HomeViewModule } from './home-view/home-view.module';
import { FamilyViewModule } from './family-view/family-view.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutViewModule } from './about-view/about-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FamilyViewModule,
    HomeViewModule,
    AboutViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
