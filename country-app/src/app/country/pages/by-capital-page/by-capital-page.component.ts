import { Component } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss',
})
export class ByCapitalPageComponent {
  onSearch(event: string): void {
    console.log('Search event:', event);

  }
}
