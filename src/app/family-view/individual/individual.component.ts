import { FamilyService } from './../family/family.service';
import { Individual } from './../../models/individual';
import { IndividualService } from './individual.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, Subscription } from 'rxjs';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  individual!: Individual;
  currentFamilyId!: number;

  subscription: Subscription = new Subscription();

  constructor(private individualService: IndividualService,
    private familyService: FamilyService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.subscription.add(this.route.queryParams.pipe(
      map(params => params['id']),
      switchMap(id => {
        return this.individualService.fetchIndividual(id);
      })
    )
    .subscribe(
        (result) => {
          this.individual = result;
        }
    ));

    this.subscription.add(this.familyService.currentFamilyId$.subscribe(
      (result) => this.currentFamilyId = result
    ))

  }

  goBackToFamily() {
    let familyIdToRoute = this.currentFamilyId;
    if (familyIdToRoute === 0) {
      if (this.individual.familyOfOrigin) {
        familyIdToRoute = this.individual.familyOfOrigin;
      } else if (this.individual.firstFamilyStarted) {
        familyIdToRoute = this.individual.firstFamilyStarted;
      } else {
        familyIdToRoute = 1;
      }
    }
    this.router.navigate(['/family', {id: familyIdToRoute}])
  }

}
