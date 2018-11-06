import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { sites } from './constants/sites';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  activeSite = '';
  sites = sites;

  constructor(activatedRoute: ActivatedRoute, router: Router) {
    router.events
      .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        this.activeSite = activatedRoute.snapshot.firstChild.data['site'];
      });
  }

  get copyrightYear() {
    return new Date().getFullYear();
  }
}
