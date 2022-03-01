import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  currentFamilyIdSubject: Subject<number>;
  currentFamilyId$: Observable<number>;

  constructor() {
    let familyId;
    const familyIdString = localStorage.getItem('familyId');
    if (familyIdString) {
      familyId = +familyIdString;
    }
    else {
      familyId = 1;
    }
    this.currentFamilyIdSubject = new BehaviorSubject<number>(familyId);
    this.currentFamilyId$ = this.currentFamilyIdSubject.asObservable();
  }

  changeCurrentFamilyId(newCurrentFamilyId: number): void {
    this.currentFamilyIdSubject.next(newCurrentFamilyId);
  }
}
