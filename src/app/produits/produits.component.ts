import {Component, OnInit} from '@angular/core';
import {ProduitServiceService} from '../services/produit-service.service';
import {map} from 'rxjs/operators';
import {Product} from '../models/produits';
import {Router} from '@angular/router';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: Product[] = [];
  selectedProduct: Product;
  addingProduct = false;
  error: any;
  showNgFor = false;

  constructor(private router: Router, private produitService: ProduitServiceService) {}

  getProducts(): void {
    this.produitService
      .getAllProducts()
      .subscribe(
        produits => (this.produits = produits),
        error => (this.error = error)
      )
  }

  addProducts(): void {
    this.addingProduct = true;
    this.selectedProduct = null;
  }

  ngOnInit() {
    this.getAllProducts();
    console.log("Noelandre TEST +",JSON.stringify(this.produits));
  }

  getAllProducts() {
    this.produitService.getAllProducts().pipe(
      map(data => data.map(productsLine => {
        const produits: Product = new Product();
        produits.id = productsLine.id;
        produits.description = productsLine.description;
        produits.libelle = productsLine.libelle;
        produits.statut = productsLine.statut;
        produits.idCategory = productsLine.idCategory;
        produits.idFournisseur = productsLine.idFournisseur;
        console.log("Noelandre Test 2 ", productsLine)
        return produits;
      }))
    ).subscribe(newProduits => { // ajouter produit au tableau
      this.produits = newProduits;
    });
  }
}
