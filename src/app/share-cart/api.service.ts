// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This makes the service available app-wide
})
export class ApiService {
  private baseUrl = 'https://your-api-endpoint.com'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  shareCart(tokenKey: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/share-cart`, { tokenKey });
  }
}
