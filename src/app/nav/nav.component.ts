import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <nav>
    <a class="navbar-brand">Niklash </a>
    <input type="text" placeholder="Tipo de Accesorio">
    <button class="primary" type="button">Buscar</button>
    <!-- <a routerLink="/login">Login</a> -->
    <a href="/login" class="login-button">Login</a>
  </nav>
`,
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
