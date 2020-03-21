import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImpressumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
