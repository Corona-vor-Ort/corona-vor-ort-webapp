import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Router } from '@angular/router';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  zipCode = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  search() {
    this.router.navigate(['/city', this.zipCode]);
  }

  onZipCodeChange(value: string) {
    this.zipCode = value;
  }
}
