import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CityRoutingModule } from './city-routing.module';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CityComponent } from './city/city.component';
import {BottomNavModule} from 'ngx-bottom-nav';

@NgModule({
  declarations: [AnnouncementsComponent, CityComponent],
  imports: [CommonModule, SharedModule, CityRoutingModule, BottomNavModule]
})
export class CityModule {}
