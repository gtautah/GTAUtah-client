import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  welcomeMessage = "Welcome to Global Telangana Association- Utah";
  missionStatement = "Our mission is to bring all Telanganites under one umbrella and create a platform to support sports activities and community engagement in Telangana & USA. GTA-Utah chapter is created to promote and support advancement of sports, culture and traditions of Telangana region.";

  features = [
    {
      title: "Sports Activities",
      description: "Join various sports events and competitions organized throughout the year.",
      image: "assets/images/paddle.JPG"
    },
    {
      title: "Community Events",
      description: "Participate in cultural events and community gatherings that celebrate our heritage.",
      image: "assets/images/community.jpg"
    },
    {
      title: "Membership Benefits",
      description: "Become a member and enjoy exclusive benefits, discounts, and priority access to events.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
    }
  ];
}
