import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ProduitsComponent } from './produits/produits.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Accueil' }
  },
  {
    path: 'produits',
    component: ProduitsComponent,
    data: { title: 'Produits' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
