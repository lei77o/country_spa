import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsNavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-forms-layout',
  imports: [RouterOutlet, FormsNavBarComponent],
  templateUrl: './forms-layout.component.html',
  styleUrl: './forms-layout.component.css',
})
export class FormsLayoutComponent { }
