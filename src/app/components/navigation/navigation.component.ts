import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  activeRoute: string = '';

  leftMenuItems = [
    { path: '/home', label: 'Home' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
  ];

  rightMenuItems = [
    { path: '/membership', label: 'Membership' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/contact', label: 'Contact' }
  ];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.activeRoute = event.url;
    });
  }

  isActive(path: string): boolean {
    if (path === '/home') {
      return this.activeRoute === '/' || this.activeRoute === '/home';
    }
    return this.activeRoute === path;
  }
}
