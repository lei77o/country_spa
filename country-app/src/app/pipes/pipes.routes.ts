import { Routes } from '@angular/router';
import { PipesLayoutComponent } from './layout/pipes-layout/pipes-layout.component';

export const pipesChildrenRoutes: Routes = [
  {
    path: 'number',
    title: 'Number Pipe',
    loadComponent: () => import('./pages/pipes-number/pipes-number.component')
  },
  {
    path: 'uncommon',
    title: 'Uncommon Pipe',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page.component')
  },
  {
    path: 'basic',
    title: 'Basic Pipe',
    loadComponent: () => import('./pages/pipe-basic/pipe-basic.component')
  },
  {
    path: 'custom',
    title: 'Custom Pipe',
    loadComponent: () => import('./pages/pipes-custom-page/pipes-custom-page.component')
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'number'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const pipesRoutes: Routes = [
  {
    path: '',
    component: PipesLayoutComponent,
    children: pipesChildrenRoutes
  }
];

export default pipesRoutes;
