import { FamilyService } from './../family-view/family/family.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private familyService: FamilyService) { }

  ngOnInit(): void {
  }

  moveToTree(): void {
    this.router.navigate(['/family', {id: this.familyService.getCurrentFamilyId}])
  }

}
