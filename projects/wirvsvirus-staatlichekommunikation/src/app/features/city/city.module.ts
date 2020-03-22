import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CityRoutingModule } from './city-routing.module';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CityComponent } from './city/city.component';
import {BottomNavModule} from 'ngx-bottom-nav';
import { HintsComponent } from './hints/hints.component';
import { GlossarComponent } from './glossar/glossar.component';
import { TabnavComponent } from './tabnav/tabnav.component';
import {AboutModule} from '../about/about.module';

@NgModule({
  declarations: [AnnouncementsComponent, CityComponent, HintsComponent, GlossarComponent, TabnavComponent],
  imports: [CommonModule, SharedModule, CityRoutingModule, BottomNavModule, AboutModule]
})
export class CityModule {}
