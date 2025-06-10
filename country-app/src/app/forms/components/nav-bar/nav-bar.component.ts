import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import reactivePagesRoutes from '../../pages/reactive/reactive.routes';

@Component({
  selector: 'forms-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})

export class FormsNavBarComponent {
  routes = reactivePagesRoutes
    .filter(route => !!route.title)
    .map((route) => ({
      title: route.title ?? '',
      path: route.path ?? '',
    }));
}
