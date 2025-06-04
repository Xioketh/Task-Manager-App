import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(){
    sessionStorage.clear();

  }

  onSubmit() {
    this.auth.login(this.username, this.password).subscribe({
      next: (response) => {

        console.log(response.token)
        const token = response.token;
        sessionStorage.setItem('token', token ?? '');
        this.router.navigate(['/list']);
        // if (response.success) {
        //   this.router.navigate(['/']);
        // } else {
        //   this.error = response.message || 'Login failed';
        // }
      },
      error: (err) => {
        console.log(err);
        this.error = err.error.message || 'An error occurred during login';
      }
    });
  }
}
