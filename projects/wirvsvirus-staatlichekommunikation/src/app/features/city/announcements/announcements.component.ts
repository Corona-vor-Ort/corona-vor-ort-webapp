import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

import {AppState, ROUTE_ANIMATIONS_ELEMENTS, selectIsAuthenticated, selectZip} from '../../../core/core.module';
import { Announcement } from './announcement.model';
import {ApiService} from '../../../api/services/api.service';
import {select, Store} from '@ngrx/store';
import {SettingsState, State} from '../../../core/settings/settings.model';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {selectSettings} from '../../../core/settings/settings.selectors';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'anms-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnnouncementsComponent implements OnInit, OnDestroy {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  announcements: [] = [];

  currZip: string;
  currZip$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private store: Store<State>,
    private cdr: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      if (params.get('zipcode')) {
       // console.log(params.get('zipcode'));

        // get City data
        this.apiService
          .apiMessagesZipGet({
            zip: params.get('zipcode')
          })
          .toPromise()
          .then((result: any) => {

            this.announcements = JSON.parse(result);
            this.cdr.detectChanges();
          });
      }

    });
  }

  ngOnDestroy(): void {

  }

}
