import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }


  protected navigateToLeadership() {
    this.router.navigate(['/leadership']);
  }
}
