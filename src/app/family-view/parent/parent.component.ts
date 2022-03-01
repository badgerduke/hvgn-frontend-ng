import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Parent } from 'src/app/models/parent';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @Input() parent!: Parent;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  moveToIndividual(id: string): void {
    this.router.navigate(['/individual', {id}]);
  }

}
