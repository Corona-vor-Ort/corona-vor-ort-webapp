import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { ImpressumComponent } from './impressum/impressum.component';
import { GlossarComponent } from './glossar/glossar.component';

@NgModule({

  declarations: [AboutComponent, ImpressumComponent, GlossarComponent],
  imports: [CommonModule, SharedModule, AboutRoutingModule]
})
export class AboutModule {}
