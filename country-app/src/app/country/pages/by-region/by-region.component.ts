import { Component, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-by-region',
  imports: [CountryListComponent],
  templateUrl: 'by-region.component.html',
  styleUrl: './by-region.component.css',
})
export class ByRegionComponent {
  countries = signal<Country[]>([])
}
