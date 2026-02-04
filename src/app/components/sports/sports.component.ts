import { Component } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  sports = [
    {
      name: "Cricket",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80"
    },
    {
      name: "Badminton",
      image: "https://images.unsplash.com/photo-1622163642999-9584742f74d9?w=600&q=80"
    },
    {
      name: "Volleyball",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80"
    },
    {
      name: "Basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80"
    },
    {
      name: "Tennis",
      image: "https://images.unsplash.com/photo-1622163642999-9584742f74d9?w=600&q=80"
    },
    {
      name: "Table Tennis",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80"
    },
    {
      name: "Football",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80"
    },
    {
      name: "Athletics",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"
    }
  ];
}
