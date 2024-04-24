import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service'; 
import { HttpClientModule } from '@angular/common/http';
import { User } from '../models/usuario.model';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule  
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  user: User = {
    name: '',
    email: '',
    password: '',
    address: ''    
  };

  constructor(private apiService: ApiService) {}

  onRegister(): void {
    
    this.apiService.registerUser(this.user).subscribe({
      next: (response) => {
        console.log(this.user);
        console.log('User registered successfully', response);
        window.alert('registro exitoso!!');
      },
      error: (error) => {
        console.log(this.user);
        console.error('There was an error registering the user', error);
        window.alert('registro error!!');
      }
    });
  }

}
