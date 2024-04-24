import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
  <nav>
    <a class="navbar-brand" routerLink="/">Niklash</a>
    <div class="search-container">
        <input type="text" placeholder="Tipo de Accesorio" class="search-input">
        <button class="primary" type="button">Buscar</button>
    </div>
    <ul>
    <li><a routerLink="/login">Login</a></li>
    <li><a routerLink="/registro">Registrarse</a></li>
    <li><a routerLink="/registro-item">Registrar Item</a></li>
    </ul>
  </nav>
`,
styleUrls: ['./nav.component.css'] 
})
export class NavComponent {
  

}
