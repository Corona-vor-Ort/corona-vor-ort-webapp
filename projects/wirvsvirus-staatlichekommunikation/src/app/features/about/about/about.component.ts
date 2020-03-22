import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Router } from '@angular/router';
import {ApiService} from '../../../api/services/api.service';
import { Store } from '@ngrx/store';
import { actionSettingsChangeCity } from '../../../core/settings/settings.actions';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  zipCode = '';

  zipMinLength = 5;


  constructor(
    private router: Router,
    private apiService: ApiService,
    private store: Store
  ) {}

  ngOnInit() {}

  search() {
    if (this.checkZip()) {
      this.router.navigate(['/city', this.zipCode]);
      this.store.dispatch(actionSettingsChangeCity({city: this.zipCode }));
    }

  }

  onZipCodeChange(value: string) {
    this.zipCode = value;

  }

  checkZip() {
    return ((this.zipCode && this.zipCode.length === this.zipMinLength) ? true : false);
  }
}
