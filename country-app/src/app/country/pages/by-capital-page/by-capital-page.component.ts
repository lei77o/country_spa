import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') || '';
  query = linkedSignal<string>(() => this.queryParam);

  countryResource = rxResource({
  request:() => ({ query : this.query()}),
  loader: ({ request })=> {
    if (!request.query) return of([]);
    this.router.navigate(['/landing/country/by-capital'], {
      queryParams: { query: request.query },
    })
    return this.countryService.searchByCapital(request.query);
  }
  })
}
