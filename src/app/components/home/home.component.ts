import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private slides!: NodeListOf<HTMLElement>;
  private currentIndex = 0;
  private intervalId: any;
  private slideInterval = 4000; // 4 seconds

  ngAfterViewInit() {
    this.slides = document.querySelectorAll('.hero-slideshow .slide');
    this.startSlideshow();
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.slideInterval);
  }

  nextSlide() {
    // Remove active from current slide
    this.slides[this.currentIndex].classList.remove('active');

    // Move to next
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;

    // Add active to new slide
    this.slides[this.currentIndex].classList.add('active');
  }

  pauseSlideshow() {
    clearInterval(this.intervalId);
  }

  resumeSlideshow() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}

