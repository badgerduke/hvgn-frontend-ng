import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerSubject: Subject<boolean> = new BehaviorSubject<boolean>(false);
  spinner$ = this.spinnerSubject.asObservable();

  constructor() { }

  changeSpinnerState(newState: boolean): void {
    this.spinnerSubject.next(newState);
  }
}
