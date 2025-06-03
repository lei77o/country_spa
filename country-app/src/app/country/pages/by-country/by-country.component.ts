import { Component, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'country-by-country',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.css',
})
export class ByCountryComponent {

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') || '';
  query = linkedSignal<string>(() => this.queryParam);

  countryResource = rxResource({
    request:() => ({ query : this.query()}),
    loader: ({ request })=> {

    if (!request.query) return of([]);

    this.router.navigate(['country/by-country'], {
      queryParams: { query: request.query },
    })

      return this.countryService.searchByCountry(request.query);
    }
  })
}
