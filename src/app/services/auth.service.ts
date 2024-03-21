// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com/login'; // Change to your actual API endpoint

  constructor(private http: HttpClient) {}

  login(credentials: LoginData): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }
}
