import { Injectable } from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {AuthService} from '../services/auth-service.service';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    this.auth.checkAuthStatus();
    return this.auth.isAuthenticated$.pipe(
      map(isAuth => isAuth || this.router.createUrlTree(['/forbidden']))
    );
  }
}
