import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Announcement } from './announcement.model';

@Component({
  selector: 'anms-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnnouncementsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  announcements: Announcement[];

  constructor() {
    this.announcements = [
      {
        id: '123',
        title: 'Bitte nicht mehr rausgehen',
        date: new Date('2020-03-20'),
        message: 'Ab 21.03.2020 00:00 Uhr bitte nicht mehr das Haus verlassen.'
      }
    ];
  }

  ngOnInit() {}
}
