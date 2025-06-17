import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { reactiveChildrenRoutes } from '../../reactive.routes';




@Component({
  selector: 'forms-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './reactive-nav-bar.component.html',
  styleUrl: './reactive-nav-bar.component.css',
})

export class ReactiveFormsNavBarComponent {
  routes = reactiveChildrenRoutes
    .filter(route => !!route.title)
    .map((route) => ({
      title: route.title ?? '',
      path: route.path ?? '',
    }));

}
