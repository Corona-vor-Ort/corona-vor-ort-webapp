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
  selectEffectiveTheme,
  selectRouterState
} from '../core/core.module';
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage,
  actionSettingsChangeTheme
} from '../core/settings/settings.actions';
import {ApiService} from '../api/services/api.service';
import {TranslateService} from '@ngx-translate/core';
import {getSortHeaderNotContainedWithinSortError} from '@angular/material/sort/sort-errors';
import {selectSettingsCity, selectSettingsZip} from '../core/settings/settings.selectors';

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
  currZip: string;
  // languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'];
  languages = [];

  logo = require('../../assets/coronavorort-logo-1-blau.png');



  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;
  navigation: any;


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
    this.store.pipe(select(selectSettingsZip)).subscribe((s) => {
      // console.log(s);
      this.currZip = s;
      this.navigation = [
        // { link: 'about', label: 'anms.menu.about' },
        { link: 'about/glossar', label: 'anms.menu.glossar' , icon: 'book-open'},
        { link: '/city/' + this.currZip + '/announcements', label: 'anms.menu.announcements' , icon: 'comment-alt'},
        { link: '/city/' + this.currZip + '/hints', label: 'anms.menu.hints' , icon: 'info-circle'},
        // { link: 'about/glossar', label: 'anms.menu.glossar' , icon: 'book-open'},
        { link: 'weiteres', label: 'anms.menu.extra' , icon: 'ellipsis-h'},

      ];


    }

    )

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

  onContrast(theme) {
    if(theme !== 'contrast-theme')
      this.store.dispatch(actionSettingsChangeTheme({ theme: 'CONTRAST-THEME' }));
    else
      this.store.dispatch(actionSettingsChangeTheme({ theme: 'DEFAULT-THEME' }));
  }
}
