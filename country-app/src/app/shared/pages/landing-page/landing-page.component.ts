import { Component } from '@angular/core';
import { TopMenuComponent } from "../../../shared/components/top-menu/top-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [TopMenuComponent, RouterOutlet],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent { }
