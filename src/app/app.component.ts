import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

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
    NavComponent,
    LazosComponent,
    DiademasComponent,
    KitsComponent,
    LoginComponent
  ],
  template: `
 <main>
    <header class="brand-name">
      <app-nav></app-nav>
    </header>
    <section class="content">
      <app-lazos></app-lazos>
      <app-diademas></app-diademas>
      <app-kits></app-kits>
    </section>
    <!-- <app-login></app-login> -->
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'niklash';
}
