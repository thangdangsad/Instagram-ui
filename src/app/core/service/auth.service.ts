// shared/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/user/register`, user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/user/login`, user).pipe(
        tap((res: any) => {
          if (res.token) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('userId', res.id);
          }
        })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? parseInt(userId, 10) : null;
  }
}
