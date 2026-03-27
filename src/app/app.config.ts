import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import localeEs from '@angular/common/locales/es-CO';
import localeFr from '@angular/common/locales/fr';

import { routes } from './app.routes';
import { LocaleService } from './services/locale.service';


registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      // useValue: 'fr'
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale,
    }
  ]
};
