import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    email: "gtautah@globaltelangana.org",
    phone: "",
    address: "Global Telangana Association - Utah Chapter, United States",
    location: "United States"
  };

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      alert('Thank you for your message! We will get back to you soon.');
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
