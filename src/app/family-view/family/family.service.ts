import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor() { }

  getCurrentFamilyId(): number {
    const familyId = localStorage.getItem('familyId');
    if (familyId) {
      return +familyId;
    }
    return 1;
  }
}
