import { IndividualResolver } from './individual.resolver';
import { FamilyResolver } from './family.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyComponent } from './family/family.component';
import { IndividualComponent } from './individual/individual.component';

const routes: Routes = [
  { path: 'family/:id', component: FamilyComponent, resolve: {family: FamilyResolver}},
  { path: 'individual/:id', component: IndividualComponent, resolve: {individual: IndividualResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyViewRoutingModule { }
