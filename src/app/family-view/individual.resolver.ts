import { IndividualService } from './individual/individual.service';
import { Individual } from './../models/individual';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndividualResolver implements Resolve<Individual> {

  constructor(private individualService: IndividualService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Individual> {
    const id = route.params['id'];
    return this.individualService.fetchIndividual(id);
  }
}
