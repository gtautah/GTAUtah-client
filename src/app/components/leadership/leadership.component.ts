import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface EventModel {
  id: number;
  title: string;
  year: number;
  date: string;
  location: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.css'
})
export class LeadershipComponent {

  
}



