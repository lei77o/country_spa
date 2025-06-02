import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-info',
  imports: [DecimalPipe],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInfoComponent {
  country = input.required<Country>();
  currentYear = computed(() => new Date().getFullYear());
}
