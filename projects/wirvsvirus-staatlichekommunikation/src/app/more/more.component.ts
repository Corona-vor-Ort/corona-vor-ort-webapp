import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
