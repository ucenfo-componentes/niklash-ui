import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  email: string;
  password: string;
  address?: string;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  user: User = { name: '', email: '', password: '', address: '' };

  onRegister(): void {
    console.log(this.user);
    // Here you would typically call a service to handle the registration
  }

}
