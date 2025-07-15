import { Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'sign-up',
      component: RegisterPageComponent
    },
    {
      path: 'login',
      component: LoginPageComponent
    },
    {
      path: '**',
      redirectTo: 'login'
    }]
  }
];

export default authRoutes;
