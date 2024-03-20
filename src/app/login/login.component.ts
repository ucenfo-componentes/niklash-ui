import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule
  ], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin(): void {
    window.alert('Login exitoso!!');
    // console.log('Username:', this.username, 'Password:', this.password);
  }

}
