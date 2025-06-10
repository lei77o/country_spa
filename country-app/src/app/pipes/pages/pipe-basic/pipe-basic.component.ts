import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocalService } from '../../services/local.service';

@Component({
  selector: 'pipe-basic',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pipe-basic.component.html',
  styleUrl: './pipe-basic.component.css',
})
export default class PipeBasicComponent {

  localService = inject(LocalService);
  currentLocal = signal(inject(LOCALE_ID));

  nameLower = signal('john');
  nameUpper = signal('doe');
  fullName = signal('john doe');

  customDate = signal(new Date());
  tickingDateEffect = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanUp(() => {
      clearInterval(interval);
      console.log("cleanup");
    });

  });

  changeLocale(locale: AvailableLocale) {
    console.log("Changing locale to:", locale);
    this.localService.changeLocale(locale);
  }
}
