import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(param: string): Region {
  const validRegions: Record<string, Region> = {
    africa: 'Africa',
    americas: 'Americas',
    asia: 'Asia',
    europe: 'Europe',
    oceania: 'Oceania',
    antarctic: 'Antarctic',

  }
  return validRegions[param.toLowerCase()] ?? 'Americas';
  //return param !== null && ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'].includes(param);
}
@Component({
  selector: 'country-by-region',
  imports: [CountryListComponent],
  templateUrl: 'by-region.component.html',
  styleUrl: './by-region.component.css',
})

export class ByRegionComponent {
  countries = signal<Country[]>([])
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  queryParam = (this.activatedRoute.snapshot.queryParamMap.get('query') || '') as Region;
  query = linkedSignal<string>(() => this.queryParam);

  countryService = inject(CountryService);
  selectedRegion = linkedSignal<Region>(() => validateQueryParam(this.queryParam));

  countryResource = rxResource({
    request: () => ({ region: this.selectedRegion() }),
      loader: ({ request }) => {
        if (!request.region) {
          return of([]);
        }
        this.router.navigate(['landing/country/by-region'], {
            queryParams: { query: request.region },
        })
        return this.countryService.searchByRegion(request.region)
      },
    });

}
