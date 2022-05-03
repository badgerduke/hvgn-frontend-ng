import { IndividualResolver } from './individual.resolver';
import { FamilyResolver } from './family.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyComponent } from './family/family.component';
import { IndividualComponent } from './individual/individual.component';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';

const routes: Routes = [
  { path: 'family/:id', component: FamilyComponent, resolve: {family: FamilyResolver}, canActivate: [AutoLoginPartialRoutesGuard]},
  { path: 'individual/:id', component: IndividualComponent, resolve: {individual: IndividualResolver}, canActivate: [AutoLoginPartialRoutesGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyViewRoutingModule { }
