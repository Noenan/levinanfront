import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ProduitsComponent } from './produits/produits.component';
import {FournisseursComponent} from './fournisseurs/fournisseurs.component';


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
  },
  {
    path: 'fournisseurs',
    component: FournisseursComponent,
    data: {title: 'Fournisseurs'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
