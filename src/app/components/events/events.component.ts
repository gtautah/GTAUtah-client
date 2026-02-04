import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  upcomingEvents = [
    {
      title: "Annual Sports Day 2024",
      date: "March 15, 2024",
      description: "Join us for our annual sports day featuring competitions in cricket, badminton, volleyball, and more. Open to all members and their families.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
    },
    {
      title: "Cricket Tournament",
      date: "April 20, 2024",
      description: "Inter-chapter cricket tournament. Teams from different GTA chapters will compete for the championship trophy.",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80"
    },
    {
      title: "Badminton Championship",
      date: "May 10, 2024",
      description: "Singles and doubles badminton championship. Multiple age categories available. Registration opens soon.",
      image: "https://images.unsplash.com/photo-1622163642999-9584742f74d9?w=800&q=80"
    },
    {
      title: "Community Sports Festival",
      date: "June 5, 2024",
      description: "A day-long festival celebrating sports and community spirit. Food, games, and activities for the whole family.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80"
    },
    {
      title: "Youth Sports Camp",
      date: "July 15-20, 2024",
      description: "Week-long sports camp for youth aged 10-18. Training sessions in multiple sports with professional coaches.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
    },
    {
      title: "Volleyball League Finals",
      date: "August 25, 2024",
      description: "Championship match for the volleyball league. Come support your favorite team and enjoy the exciting matches.",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80"
    }
  ];

  pastEvents = [
    {
      title: "Winter Sports Meet 2023",
      date: "December 10, 2023",
      description: "Successfully concluded winter sports meet with participation from over 200 athletes across various sports.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80"
    },
    {
      title: "Thanksgiving Basketball Tournament",
      date: "November 25, 2023",
      description: "Annual basketball tournament held during Thanksgiving weekend. Great turnout and exciting matches.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80"
    }
  ];
}
