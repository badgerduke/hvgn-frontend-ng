import { Child } from './../../models/child';
import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() child!: Child;
  @Output() moveToChildsFamilyEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  moveToChildsFamily(id: number): void {
    this.moveToChildsFamilyEvent.emit(id);
  }

  moveToIndividual(id: string): void {
    this.router.navigate(['/individual', id])
  }

}
