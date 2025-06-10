import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes-number',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './pipes-number.component.html',
  styleUrl: './pipes-number.component.css',
})
export default class PipesNumberComponent {
  totalSells = signal(1234567.8956);
  percent = signal(0.1234);
}
