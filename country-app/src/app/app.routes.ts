import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { LandingPageComponent } from './shared/pages/landing-page/landing-page.component';


export const routes: Routes = [
  { path: '',
    component: HomePageComponent
  },
  {
  path: 'landing',
    component: LandingPageComponent,
    children: [
      { path: 'country',
        loadChildren: () => import('./country/country.routes'),
      },
      { path: 'pipes',
        loadChildren: () => import('./pipes/pipes.routes'),
      },
      { path: 'forms',
        loadChildren: () => import('./forms/forms.routes'),
      },

    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {path: '**', redirectTo: ''}
];
