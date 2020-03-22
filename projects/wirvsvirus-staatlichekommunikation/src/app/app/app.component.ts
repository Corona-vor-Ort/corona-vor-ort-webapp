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
  actionSettingsChangeLanguage,
  actionSettingsChangeTheme
} from '../core/settings/settings.actions';

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
  logo = require('../../assets/coronavorort-logo-1-blau.png');
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'];
  navigation = [
    // { link: 'about', label: 'anms.menu.about' },
    { link: 'meldungen', label: 'anms.menu.announcements' , icon: 'comment-alt'},
    { link: 'hinweise', label: 'anms.menu.hinweise' , icon: 'info-circle'},
    { link: 'about/glossar', label: 'anms.menu.glossar' , icon: 'book-open'},
    { link: 'weiteres', label: 'anms.menu.more' , icon: 'ellipsis-h'},
    // { link: 'feature-list', label: 'anms.menu.features' },
   //  { link: 'examples', label: 'anms.menu.examples' }
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
    private storageService: LocalStorageService
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

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
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

  onContrast(theme) {
    if(theme !== 'contrast-theme')
      this.store.dispatch(actionSettingsChangeTheme({ theme: 'CONTRAST-THEME' }));
    else
      this.store.dispatch(actionSettingsChangeTheme({ theme: 'DEFAULT-THEME' }));
  }
}
