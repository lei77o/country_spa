import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../components/top-menu/top-menu.component";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './countryLayout.component.html',
  styleUrl: './countryLayout.component.css',
})
export class CountryLayoutComponent { }
