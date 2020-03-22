import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-glossar',
  templateUrl: './glossar.component.html',
  styleUrls: ['./glossar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlossarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
