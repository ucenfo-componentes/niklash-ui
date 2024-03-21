import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../registro/registro.component'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://yourapi.com/api'; // Your API base URL

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
}
