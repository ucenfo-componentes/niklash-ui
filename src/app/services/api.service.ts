import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // https://your-azure-function-url.com/api
  // private baseUrl = 'http://localhost:7071/api'; // Your API base URL
  private baseUrl = 'http://localhost:7071/api'; // Your Azure Function URL

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/Registrar_Usuario`, user);
  }
}
