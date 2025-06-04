import { Component } from '@angular/core';
import {AuthService} from '../../services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  error = '';
  success: string | undefined = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.register(this.username, this.password).subscribe({
      next: (response) => {
        console.log(response)
        this.error = ''
        this.success = response.message
        // if (response.success) {
        //   this.router.navigate(['/login']);
        // } else {
        //   this.error = response.message || 'Registration failed';
        // }
      },
      error: (err) => {
        this.error = err.error.message || 'An error occurred during registration';
        this.success = ''
      }
    });
  }
}
