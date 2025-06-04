import { Routes } from '@angular/router';
import { CountryLayoutComponent } from './layouts/countryLayout/countryLayout.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';



export const countryRoutes: Routes = [
  { path: '',
    component: CountryLayoutComponent,
    children: [
      { path: 'by-capital',
        component: ByCapitalPageComponent
      },
      { path: 'by-region',
        component: ByRegionComponent
      },
      { path: 'by-country',
        component: ByCountryComponent
      },
      { path: 'by/:code',
        component: CountryPageComponent
      },
         {
        path: '',
        pathMatch: 'full',
        redirectTo: 'by-capital'
      },
      {path: '**', redirectTo: 'by-capital'}
    ]
  },
];

export default countryRoutes;
