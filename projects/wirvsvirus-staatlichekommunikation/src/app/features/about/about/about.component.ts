import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Router } from '@angular/router';
import {ApiService} from '../../../api/services/api.service';
import { Store } from '@ngrx/store';
import {actionSettingsChangeCity, actionSettingsChangeZip} from '../../../core/settings/settings.actions';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class ErrorStateMatcherZip implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



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

  locationData = {
    zip: '',
    name: ''
  };

  zipControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new ErrorStateMatcherZip();

  constructor(
    private router: Router,
    private apiService: ApiService,
    private store: Store,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  search() {
    if (this.checkZip()) {

      // get City data
      this.apiService
        .apiCitiesByZipZipGet({
          zip: this.zipCode
        })
        .toPromise()
        .then((result: any) => {

          const cityData = JSON.parse(result);

          if (cityData[0] && cityData[0].translations[0] && cityData[0].translations[0].name) {
            this.locationData.name = cityData[0].translations[0].name;
            this.locationData.zip = this.zipCode;

            this.store.dispatch(actionSettingsChangeCity({city: this.locationData.name }));
            this.store.dispatch(actionSettingsChangeZip({zip: this.locationData.zip }));

            console.log('locationDataLoaded', this.locationData);
            this.router.navigate(['/city', this.zipCode]);
          }
          else {
            console.log('zip not found!');
            this.zipControl.setErrors({'notfound': true, 'invalid': true});
            this.cdr.detectChanges();
          }

        });

    }

  }

  onZipCodeChange(value: string) {
    this.zipCode = value;

  }

  checkZip() {
    return ((this.zipCode && this.zipCode.length === this.zipMinLength) ? true : false);
  }
}
