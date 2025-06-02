import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);
  query = signal('');
    countryResource = rxResource({
    request:() => ({ query : this.query()}),
    loader: ({ request })=> {
      if (!request.query) return of([]);
      return this.countryService.searchByCapital(request.query);
    }
  })

  /* isLoading = signal(false);
  isError = signal<string |null >(null);
  countries = signal<Country[]>([]);


  onSearch(query: string): void {
    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query)
      .subscribe({
        next: (countries) => {
          this.isLoading.set(false);
          this.countries.set(countries);
        },
        error: (err)=> {
            this.isLoading.set(false);
            this.countries.set([]);
            this.isError.set(err);
        },
    });

  } */
}
