import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { LazosComponent } from './lazos/lazos.component';
import { DiademasComponent } from './diademas/diademas.component';
import { KitsComponent } from './kits/kits.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, 
    NavComponent,
    LazosComponent,
    DiademasComponent,
    KitsComponent,
    LoginComponent,
    RegistroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'niklash';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      console.log(event);
    });
  }
}
