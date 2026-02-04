import { Component } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent {
  membershipTypes = [
    {
      type: "Individual",
      price: "$50",
      period: "per year",
      features: [
        "Access to all sports facilities",
        "Participation in tournaments",
        "Discounted event tickets",
        "Monthly newsletter",
        "Member-only events"
      ],
      featured: false
    },
    {
      type: "Family",
      price: "$100",
      period: "per year",
      features: [
        "All Individual benefits",
        "Covers up to 4 family members",
        "Priority registration for events",
        "Free entry to family events",
        "Special family discounts",
        "Kids sports programs included"
      ],
      featured: true
    },
    {
      type: "Student",
      price: "$25",
      period: "per year",
      features: [
        "All Individual benefits",
        "Valid student ID required",
        "Access to youth programs",
        "Mentorship opportunities",
        "Scholarship eligibility"
      ],
      featured: false
    }
  ];

  benefits = [
    {
      title: "Sports Facilities",
      description: "Access to premium sports facilities and equipment",
      icon: "🏟️"
    },
    {
      title: "Expert Coaching",
      description: "Training sessions with experienced coaches and trainers",
      icon: "👨‍🏫"
    },
    {
      title: "Community Network",
      description: "Connect with like-minded individuals and build lasting friendships",
      icon: "🤝"
    },
    {
      title: "Exclusive Events",
      description: "Priority access to tournaments, workshops, and social gatherings",
      icon: "🎉"
    }
  ];
}
