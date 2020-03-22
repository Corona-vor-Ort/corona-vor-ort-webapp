import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

import {AppState, ROUTE_ANIMATIONS_ELEMENTS, selectIsAuthenticated, selectZip} from '../../../core/core.module';
import { Announcement } from './announcement.model';
import {ApiService} from '../../../api/services/api.service';
import {select, Store} from '@ngrx/store';
import {State} from '../../../core/settings/settings.model';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'anms-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnnouncementsComponent implements OnInit, OnDestroy {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  announcements: Announcement[] = [];

  currZip$: Observable<string>;

  constructor(
    private apiService: ApiService,
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    this.currZip$ = this.store.pipe(select(selectZip));


  }

  ngOnDestroy(): void {

  }

}
