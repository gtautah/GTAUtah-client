import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  template: `
    <div style="padding:40px">
      <h2>Event Details - ID: {{ eventId }}</h2>
      <p>Here you can load full event details from API using this ID.</p>
    </div>
  `
})
export class EventDetailsComponent implements OnInit {

  eventId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
