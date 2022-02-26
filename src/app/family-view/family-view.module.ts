import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualComponent } from './individual/individual.component';
import { FamilyViewRoutingModule } from './family-view-routing.module';
import { FamilyComponent } from './family/family.component';



@NgModule({
  declarations: [
    IndividualComponent,
    FamilyComponent
  ],
  imports: [
    CommonModule,
    FamilyViewRoutingModule
  ]
})
export class FamilyViewModule { }
