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
    <!-- <a class="navbar-brand">Niklash </a> -->
    <ul>
        <li><a routerLink="/lazos">Niklash</a></li>
        <li><a routerLink="/lazos">Lazos</a></li>
        <li><a routerLink="/colas">Colas</a></li>
        <li><a routerLink="/diademas">Diademas</a></li>
        <li><a routerLink="/kits">Kits</a></li>
      </ul>
      <input type="text" placeholder="Tipo de Accesorio">
      <button class="primary" type="button">Buscar</button>
      <a href="/login" class="login-button">Login</a>
  </nav>
`,
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
