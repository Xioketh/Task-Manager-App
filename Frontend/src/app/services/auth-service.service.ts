import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {environment} from '../../environments/environment';

interface AuthResponse {
  success: boolean;
  token?: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, {
      username,
      password
    }).pipe(
      tap(response => {
        if (response.success) {
          this.isAuthenticated.next(true);
        }
      })
    );
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, {
      username,
      password
    }).pipe(
      tap(response => {
        if (response.success && response.token) {
          localStorage.setItem('auth_token', response.token);
          this.isAuthenticated.next(true);
        }
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem('auth_token');
    this.isAuthenticated.next(false);
  }

  checkAuthStatus(): void {
    const token = sessionStorage.getItem('token');
    this.isAuthenticated.next(!!token);
  }
}
