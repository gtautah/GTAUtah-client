import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface EventGallery {
  id: number;
  title: string;
  youtubeUrl: string;
  safeUrl?: SafeResourceUrl;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  eventsGallery: EventGallery[] = [
    {
      id: 1,
      title: 'Bathukamma Festival',
      youtubeUrl: 'https://www.youtube.com/embed/27UXqNQh4eU?list=PLpKJfpC1JBGNupLCIalsgbAVrjAH8yvRW'
    },
    {
      id: 2,
      title: 'Dasara Celebration',
      youtubeUrl: 'https://www.youtube.com/embed/8J3kZJ6n8xY'
    },
    {
      id: 3,
      title: 'Diwali Festival',
      youtubeUrl: 'https://www.youtube.com/embed/2XK2jP6-TLc'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {
    // Make URLs safe for Angular
    this.eventsGallery.forEach(e => {
      e.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(e.youtubeUrl);
    });
  }
}
