import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Parent } from 'src/app/models/parent';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {

  @Input() parent!: Parent;
  @Output() moveToAnotherFamilyEvent: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  moveToIndividual(id: string): void {
    this.router.navigate(['/individual', id]);
  }

  moveToFamilyOfOrigin(id: number): void {
    this.moveToAnotherFamilyEvent.emit(id);
  }

  moveToAnotherFamily(id: number) {
    this.moveToAnotherFamilyEvent.emit(id);
  }

}
