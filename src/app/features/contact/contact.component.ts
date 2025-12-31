import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitted = true;
      // Simulate API call
      setTimeout(() => {
        console.log('Form Submitted', this.contactForm.value);
        this.contactForm.reset();
        this.isSubmitted = false; // Reset for demo purposes, or keep true to show 'Sent!'
        alert('Message sent successfully!');
      }, 1000);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
