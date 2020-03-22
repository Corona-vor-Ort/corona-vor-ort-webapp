import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HintsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
