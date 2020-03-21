import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component'

import { AboutComponent } from './about/about.component';
import { GlossarComponent } from './glossar/glossar.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: { title: 'anms.menu.about' }
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
    data: { title: 'anms.menu.impressum' }
  },
  {
    path: 'glossar',
    component: GlossarComponent,
    data: { title: 'anms.menu.glossar' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
