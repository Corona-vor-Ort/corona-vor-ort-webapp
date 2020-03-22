import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CityComponent } from './city/city.component';
import {HintsComponent} from './hints/hints.component';
import {GlossarComponent} from './glossar/glossar.component';

const routes: Routes = [
  {
    path: ':zipcode',
    children: [
      {
        path: '',
        redirectTo: 'announcements',
        component: CityComponent
    },
    {
      path: 'announcements',
      component: AnnouncementsComponent
    },

      {
        path: 'hints',
        component: HintsComponent
      },
      {
        path: 'glossar',
        component: GlossarComponent
      },
      {
        path: 'extra',
        component: AnnouncementsComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule {}
