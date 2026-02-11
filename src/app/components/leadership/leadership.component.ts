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

  constructor(private router: Router) {}

  selectedYear: number = 2025;

  events: EventModel[] = [
    {
      id: 1,
      title: 'Bathukamma Festival',
      year: 2025,
      date: 'Oct 02, 2025',
      location: 'Hyderabad',
      description: 'A vibrant floral festival celebrating Telangana culture and tradition.',
      image: 'https://images.unsplash.com/photo-1609833143634-8e9f4b5f8e4e'
    },
    {
      id: 2,
      title: 'Dasara Celebrations',
      year: 2025,
      date: 'Oct 12, 2025',
      location: 'Mysore',
      description: 'Grand procession and royal festivities marking victory of good over evil.',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da'
    },
    {
      id: 3,
      title: 'Diwali Festival',
      year: 2025,
      date: 'Nov 01, 2025',
      location: 'Delhi',
      description: 'Festival of Lights symbolizing prosperity and spiritual victory.',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a'
    },
    {
      id: 4,
      title: 'Bathukamma Festival',
      year: 2026,
      date: 'Oct 21, 2026',
      location: 'Hyderabad',
      description: 'Colorful floral stacks and community gatherings across Telangana.',
      image: 'https://images.unsplash.com/photo-1609833143634-8e9f4b5f8e4e'
    },
    {
      id: 5,
      title: 'Diwali Festival',
      year: 2026,
      date: 'Nov 08, 2026',
      location: 'Mumbai',
      description: 'Illuminated homes, fireworks, and festive celebrations nationwide.',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a'
    }
  ];

  get filteredEvents() {
    return this.events.filter(e => e.year === this.selectedYear);
  }

  changeYear(year: number) {
    this.selectedYear = year;
  }

  goToDetails(id: number) {
    this.router.navigate(['/events', id]);
  }
}



