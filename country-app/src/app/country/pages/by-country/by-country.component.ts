import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'country-by-country',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.css',
})
export class ByCountryComponent {

  countryService = inject(CountryService);
  query = signal('');

/* countryResource = resource({
    request:() => ({ query : this.query()}),
    loader: async({ request })=> {
      if (!request.query) return [];
      return await firstValueFrom(this.countryService.searchByCountry(request.query));
    }
  }) */
  //TODO check if rxResource was move to dev
  countryResource = rxResource({
    request:() => ({ query : this.query()}),
    loader: ({ request })=> {
      if (!request.query) return of([]);
      return this.countryService.searchByCountry(request.query);
    }
  })


}
