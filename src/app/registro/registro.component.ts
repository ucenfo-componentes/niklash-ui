import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service'; 
import { HttpClientModule } from '@angular/common/http';

interface Address {
  provincia: string;
  canton: string;
  distrito: string;
  otrasSenas: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  address: Address;
}

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
  // Initialize user with detailed address structure
  user: User = {
    name: '',
    email: '',
    password: '',
    address: {
      provincia: '',
      canton: '',
      distrito: '',
      otrasSenas: ''
    }
    
  };

  provincias = ['San Jose ', 'Alajuela ', 'Heredia ', 'Cartago ', 'Guanacaste ', 'Puntarenas ', 'Limon '];
  
  constructor(private apiService: ApiService) {}

  onRegister(): void {
    
    this.apiService.registerUser(this.user).subscribe({
      next: (response) => {
        console.log('User registered successfully', response);
        window.alert('registro exitoso!!');
      },
      error: (error) => {
        console.error('There was an error registering the user', error);
        window.alert('registro error!!');
      }
    });
  }

}
