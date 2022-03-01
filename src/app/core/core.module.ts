import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { SpinnerComponent } from './spinner.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class CoreModule { }
