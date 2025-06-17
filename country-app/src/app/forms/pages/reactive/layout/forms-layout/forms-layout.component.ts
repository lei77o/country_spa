import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsNavBarComponent } from '../../components/reactive-nav-bar/reactive-nav-bar.component';


@Component({
  selector: 'app-forms-layout',
  imports: [RouterOutlet, ReactiveFormsNavBarComponent],
  templateUrl: './forms-layout.component.html',
  styleUrl: './forms-layout.component.css',
})
export class FormsLayoutComponent { }
