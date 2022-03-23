import { FamilyService } from './family.service';
import { map, Subscription, switchMap } from 'rxjs';
import { Family } from './../../models/family';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit, OnDestroy {

  family!: Family;
  subscription: Subscription = new Subscription();

  constructor(private familyService: FamilyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.subscription.add(this.route.params.pipe(
      map(params => params['id']),
      switchMap(id => {
        return this.familyService.fetchFamily(id);
      })
    )
    .subscribe(
        (result) => {
          this.family = result;
        }
    ));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  moveToAnotherFamily(id: number): void {
    this.router.navigate(['/family', id])
    this.familyService.changeCurrentFamilyId(id);
  }

}
