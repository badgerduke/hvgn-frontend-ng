import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyComponent } from './family/family.component';
import { IndividualComponent } from './individual/individual.component';

const routes: Routes = [
  { path: 'family/:id', component: FamilyComponent },
  { path: 'individual/:id', component: IndividualComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyViewRoutingModule { }
