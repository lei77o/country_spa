import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { LocalService } from './pipes/services/local.service';
import { authInterceptor } from './auth/interceptors/auth.interceptor';
import { loggingInterceptor } from './shared/interceptors/login.interceptor';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor, loggingInterceptor])),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      deps: [LocalService],
      useFactory: (localService: LocalService) => localService.getLocale,
    }

  ]
};
