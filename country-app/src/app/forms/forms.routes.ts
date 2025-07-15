import { Routes } from '@angular/router';
import { FormsLayoutComponent } from './layout/forms-layout/forms-layout.component';

export const formsChildrenRoutes: Routes = [
    {
      path: 'reactive',
      loadChildren: () => import('./pages/reactive/reactive.routes'),
    },
    {
      path: 'country',
      loadChildren: () => import('./pages/country/country-pages.routes'),
    },

      {
      path: '**',
      redirectTo: 'reactive'
    }
];

export const formsRoutes: Routes = [
  {
    path: '',
    component: FormsLayoutComponent,
    children: formsChildrenRoutes
  }
];

export default formsRoutes;
