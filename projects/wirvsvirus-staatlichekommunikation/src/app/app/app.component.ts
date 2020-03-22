import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';

import {
  authLogin,
  authLogout,
  routeAnimations,
  LocalStorageService,
  selectIsAuthenticated,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme
} from '../core/core.module';
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage
} from '../core/settings/settings.actions';
import {ApiService} from '../api/services/api.service';
import {TranslateService} from '@ngx-translate/core';
import {getSortHeaderNotContainedWithinSortError} from '@angular/material/sort/sort-errors';

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../../assets/logo.png');

  // languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'];
  languages = [];

  navigation = [
    { link: 'about', label: 'anms.menu.about' },
    { link: 'about/glossar', label: 'anms.menu.glossar' , icon: 'book-open'},
    // { link: 'feature-list', label: 'anms.menu.features' },
    { link: 'examples', label: 'anms.menu.examples' }
  ];

  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'anms.menu.settings' }
  ];

  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(
    private store: Store,
    private storageService: LocalStorageService,
    private apiService: ApiService,
    private translate: TranslateService
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {

    this.storageService.testLocalStorage();

    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    const browserLang = this.translate.getBrowserLang();

    console.log('BrowserLang', browserLang);

    this.apiService
      .apiLocalesGet()
      .toPromise()
      .then((result: any) => {

        if (result) {

          const languages = JSON.parse(result);

          if (languages) {
            languages.forEach(el => {

              const lstring = el.iso.split('-');
              if (lstring.length > 1) {
                this.languages.push(lstring[0]);

                // in case of browser language match
                // set as default language
                if (browserLang === lstring[0]) {
                  this.language$ = this.store.pipe(select(selectSettingsLanguage));
                }
              }
            })
          }

          this.language$ = this.store.pipe(select(selectSettingsLanguage));
        }


      });

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  onLoginClick() {
    this.store.dispatch(authLogin());
  }

  onLogoutClick() {
    this.store.dispatch(authLogout());
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }
}
