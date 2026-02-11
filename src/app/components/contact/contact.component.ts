import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  private publicKey = 'PUBLIC_KEY';
  private serviceId = 'SERVICE_ID';
  private templateId = 'TEMPLATE_ID';
  protected gtaEmail = 'gtautah@globaltelangana.org';

  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  successMessage = '';

  sendEmail() {
    this.isSubmitting = true;

    emailjs.send(
      this.serviceId,
      this.templateId,
      {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message,
        to_email: this.gtaEmail
      },
      this.publicKey
    ).then(() => {
      this.successMessage = 'Message sent successfully!';
      this.formData = { name: '', email: '', message: '' };
      this.isSubmitting = false;
    }).catch(error => {
      console.error(error);
      this.isSubmitting = false;
    });
  }
}
