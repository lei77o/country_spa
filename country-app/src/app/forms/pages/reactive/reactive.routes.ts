import { Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';


export const reactivePagesRoutes: Routes = [
    { path: 'basic',
      title: 'Basics',
      component: BasicPageComponent
    },
    { path: 'dynamic',
      title: 'Dynamic',
      component: DynamicPageComponent
    },
    { path: 'switch',
      title: 'Switch',
      component: SwitchesPageComponent
    },
    {
      path: '**',
      redirectTo: 'basic'
    }
];

export default reactivePagesRoutes;
