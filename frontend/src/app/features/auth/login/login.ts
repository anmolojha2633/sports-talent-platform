import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Login Data:', this.user);
  }}