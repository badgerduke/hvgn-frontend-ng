import { Union } from './../../models/union';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styleUrls: ['./union.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnionComponent implements OnInit {

  @Input() union!: Union;

  constructor() { }

  ngOnInit(): void {
  }

}
