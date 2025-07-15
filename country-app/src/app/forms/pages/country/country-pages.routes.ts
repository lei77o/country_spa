import { Routes } from '@angular/router';
import { CountryPageComponent } from './pages/country-page.component';


export const countryPagesRoutes: Routes = [
  {
    path: '',
    component: CountryPageComponent,
  }
];

export default countryPagesRoutes;
