import { AppState } from '../core.module';

export const NIGHT_MODE_THEME = 'BLACK-THEME';

// export type Language = 'en' | 'sk' | 'de' | 'fr' | 'es' | 'pt-br' | 'he';
export type Language = '';

export interface SettingsState {
  language: string;
  theme: string;
  autoNightMode: boolean;
  nightTheme: string;
  stickyHeader: boolean;
  pageAnimations: boolean;
  pageAnimationsDisabled: boolean;
  elementsAnimations: boolean;
  hour: number;
  city: string;
}

export interface State extends AppState {
  settings: SettingsState;
}
