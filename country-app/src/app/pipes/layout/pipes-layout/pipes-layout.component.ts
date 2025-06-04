import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'pipes-layout',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './pipes-layout.component.html',
  styleUrl: './pipes-layout.component.css',
})
export class PipesLayoutComponent { }
