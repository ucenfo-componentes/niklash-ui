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
  template: `
   <div class="login-container">
      <form (ngSubmit)="onLogin()">
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input type="text" id="username" [(ngModel)]="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="password">Clave:</label>
          <input type="password" id="password" [(ngModel)]="password" name="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
`,
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
