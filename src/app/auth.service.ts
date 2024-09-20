import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    // Replace with your actual authentication logic
    if (username === 'test' && password === 'password') {
      return of(true);
    } else {
      return of(false);
    }
  }

  signup(username: string, password: string): Observable<boolean> {
    // Replace with your actual signup logic
    // Ideally, you'd send the user credentials to a backend API
    return of(true);
  }
}
