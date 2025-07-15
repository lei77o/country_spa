import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { LandingPageComponent } from './shared/pages/landing-page/landing-page.component';
import { AuthLayoutComponent } from './auth/layout/auth-layout/auth-layout.component';
import { NotAuthenticatedGuard } from './auth/guards/not-authenticated.guard';

export const routes: Routes = [
  { path: '',
    component: HomePageComponent
  },
  {
    path:'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.routes'),
    canMatch: [NotAuthenticatedGuard]
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
    canMatch: [NotAuthenticatedGuard]
  },
  {path: '**', redirectTo: ''}
];
