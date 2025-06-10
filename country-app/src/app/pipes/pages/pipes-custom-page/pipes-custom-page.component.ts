import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Hero } from '../../interfaces/hero.interface';
import { ToggleCasePipe } from '../../pipes/togggle-case.pipe';
import { CanFyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-create.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';
import { heroes } from '../../data/hero.data';


@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe,
  ],
  templateUrl: './pipes-custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Leonardo Albrecht');

  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');
}
