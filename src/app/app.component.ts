import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <div class="header-bar"></div>
      <nav>
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/produit" routerLinkActive="active">Produits</a>
      </nav>
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'levinanfront';
}
