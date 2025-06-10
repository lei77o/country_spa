import { Routes } from '@angular/router';
import { CountryPageComponent } from './country-page/country-page.component';


export const countryPagesRoutes: Routes = [
  {
    path: '',
    component: CountryPageComponent,
  }
];

export default countryPagesRoutes;
