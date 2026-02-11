import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  constructor(private router: Router) {}

  events = [
    {
      id: 1,
      title: 'Tech Innovation Summit',
      image: 'assets/events/event1.jpg',
      description: 'Explore the latest trends in AI, Cloud, and Emerging Technologies.'
    },
    {
      id: 2,
      title: 'Cultural Fest 2026',
      image: 'assets/events/event2.jpg',
      description: 'Celebrating traditions, music, dance, and regional heritage.'
    },
    {
      id: 3,
      title: 'Startup Networking Meetup',
      image: 'assets/events/event3.jpg',
      description: 'Connect with founders, investors, and innovators.'
    },
    {
      id: 4,
      title: 'Marathon for Health',
      image: 'assets/events/event4.jpg',
      description: 'Join us for a community run promoting fitness and wellness.'
    },
    {
      id: 5,
      title: 'Developer Bootcamp',
      image: 'assets/events/event5.jpg',
      description: 'Hands-on training in Angular, Spring Boot & DevOps.'
    }
  ];

  goToDetails(eventId: number) {
    this.router.navigate(['/events', eventId]);
  }
}
