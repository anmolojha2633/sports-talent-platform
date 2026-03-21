import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };
  
  onSubmit() {
    console.log('Signup Data:', this.user);
  }
}