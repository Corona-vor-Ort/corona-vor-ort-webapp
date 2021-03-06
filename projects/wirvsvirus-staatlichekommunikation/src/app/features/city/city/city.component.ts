import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../../api/services/api.service';
import {Location} from './location.model';
import {Store} from '@ngrx/store';
import {State} from '../../../core/settings/settings.model';
import {actionSettingsChangeCity, actionSettingsChangeZip} from '../../../core/settings/settings.actions';

@Component({
  selector: 'anms-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  locationData: Location = {};
  locationDataLoaded = false;


  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private store: Store<State>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      if (params.get('zipcode')) {

        // get City data
        this.apiService
          .apiCitiesByZipZipGet({
            zip: params.get('zipcode')
          })
          .toPromise()
          .then((result: any) => {

            const cityData = JSON.parse(result);

            console.log(cityData);

            if (cityData[0] && cityData[0].translations[0] && cityData[0].translations[0].name) {
              this.locationData.name = cityData[0].translations[0].name;
              this.locationData.zip = params.get('zipcode');

              this.store.dispatch(actionSettingsChangeCity({city: this.locationData.name }));
              this.store.dispatch(actionSettingsChangeZip({zip: this.locationData.zip }));

              this.locationDataLoaded = true;
              this.cdr.detectChanges();

              console.log('locationDataLoaded', this.locationData);
            }

          });
      }

    });
  }
}
