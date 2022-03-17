import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Family } from 'src/app/models/family';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  currentFamilyIdSubject: Subject<number>;
  currentFamilyId$: Observable<number>;

  constructor(private httpClient: HttpClient) {
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
    localStorage.setItem('familyId', `${newCurrentFamilyId}`)
  }

  fetchFamily(id: number): Observable<Family> {
    return this.httpClient.get<Family>(`/family/${id}`);
  }
}
