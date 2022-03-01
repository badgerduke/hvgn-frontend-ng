import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualComponent } from './individual/individual.component';
import { FamilyViewRoutingModule } from './family-view-routing.module';
import { FamilyComponent } from './family/family.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [
    IndividualComponent,
    FamilyComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    FamilyViewRoutingModule
  ]
})
export class FamilyViewModule { }
