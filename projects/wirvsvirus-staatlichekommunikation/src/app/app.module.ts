import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import {environment} from '../environments/environment';
import {ApiModule} from './api/api.module';
import { ApiTestComponent } from './api-test/api-test.component';



@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core
    CoreModule,

    // app
    AppRoutingModule,
    ApiModule.forRoot({ rootUrl: environment.apiURI }),
  ],
  declarations: [AppComponent, ApiTestComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
