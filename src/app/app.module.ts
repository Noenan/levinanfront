import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { AngularMaterialModule} from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'




@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    DashboardComponent,
    FournisseursComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
