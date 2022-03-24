import { Family } from './../models/family';
import { FamilyService } from './family/family.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyResolver implements Resolve<Family> {

  constructor(private familyService: FamilyService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Family> {
    const id = route.params['id'];
    return this.familyService.fetchFamily(id);
  }
}
