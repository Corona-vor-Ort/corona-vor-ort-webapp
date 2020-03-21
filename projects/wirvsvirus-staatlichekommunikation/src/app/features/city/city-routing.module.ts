import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  {
    path: ':zipcode',
    component: CityComponent,
    children: [
      {
        path: '',
        redirectTo: 'announcements',
        pathMatch: 'full'
      },
      {
        path: 'announcements',
        component: AnnouncementsComponent,
        data: { title: 'anms.menu.announcments' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule {}
