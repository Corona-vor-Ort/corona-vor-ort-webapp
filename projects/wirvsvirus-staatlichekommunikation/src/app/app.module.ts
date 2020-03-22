import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {forwardRef, NgModule, Provider} from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

import { SharedModule } from './shared/shared.module';

import {environment} from '../environments/environment';
import {ApiModule} from './api/api.module';
import { ApiTestComponent } from './api-test/api-test.component';

import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ApiInterceptor} from './core/api.interception';
import {BottomNavModule} from 'ngx-bottom-nav';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};




@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    BottomNavModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    // core
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,
    ApiModule.forRoot({ rootUrl: environment.apiURI }),
  ],
  declarations: [AppComponent, ApiTestComponent],
  bootstrap: [AppComponent],
  providers: [
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER
  ]
})
export class AppModule {
}
