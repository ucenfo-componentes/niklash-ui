import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

export interface LoginData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule
  ], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService: any;
  loginData: LoginData = {
    username: '',
    password:''

  };
  

  onLogin(): void {
    // window.alert('Login exitoso!!');
    this.authService.login(this.loginData).subscribe({
      next: (response: any) => {
        console.log('Login successful', response);
        window.alert('Login exitoso');
        // Proceed with the login flow (e.g., navigating to a dashboard)
      },
      error: (error: any) => {
        console.error('Login failed', error);
        window.alert('Login fallido');
        // Handle login failure (e.g., showing an error message)
      }
    });
  }

}
