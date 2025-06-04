import { Component } from '@angular/core';
import { pipesChildrenRoutes } from '../../pipes.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'pipes-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})

export class NavBarComponent {
  routes = pipesChildrenRoutes
    .filter(route => !!route.title)
    .map((route) => ({
      title: route.title ?? '',
      path: route.path ?? '',
    }));
}
