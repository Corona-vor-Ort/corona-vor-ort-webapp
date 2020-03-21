import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'anms-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  name: String;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('zipcode') + ' Berlin';
    });
  }
}
