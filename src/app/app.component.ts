import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { LazosComponent } from './lazos/lazos.component';
import { DiademasComponent } from './diademas/diademas.component';
import { KitsComponent } from './kits/kits.component';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule, 
    NavComponent,
    LazosComponent,
    DiademasComponent,
    KitsComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'niklash';
}
