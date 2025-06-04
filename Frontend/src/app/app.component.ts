import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth-service.service';
import {Observable} from 'rxjs';
import {AlertService} from './services/alert-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  protected readonly sessionStorage = sessionStorage;

  isLoggedIn$: Observable<boolean> | undefined;
  username: string = '';
  isLoggedIn: boolean = false;


  constructor(private authService: AuthService, private router: Router, private alertService: AlertService) {
  }

  ngOnInit() {
    // this.isLoggedIn$ = this.authService.isAuthenticated$;
    // console.log(this.isLoggedIn$);
    // this.isLoggedIn = !!sessionStorage.getItem('token');
    // console.log(this.isLoggedIn)

  }

  logout() {
    // this.authService.logout();

    this.alertService.confirmDialog('Are you sure?', '', true)
      .then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/']);
        }
      });

  }

  checkIsLoged(): boolean {
    const token = sessionStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
