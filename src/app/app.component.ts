import { FamilyService } from './family-view/family/family.service';
import { SpinnerService } from './core/spinner.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  spinnerState = false;
  currentFamily!: number;
  subscription: Subscription = new Subscription();

  constructor(private spinnerService: SpinnerService,
    private familyService: FamilyService) { }

  ngOnInit(): void {
    this.subscription.add(this.spinnerService.spinner$.pipe(delay(0)).subscribe(
      (newSpinnerState) => this.spinnerState = newSpinnerState
    ));
    this.subscription.add(this.familyService.currentFamilyId$.subscribe(
      (newCurrentFamilyId) => this.currentFamily = newCurrentFamilyId
    ));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
