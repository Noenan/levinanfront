import {Component, OnInit} from '@angular/core';
import {Fournisseur} from '../models/fournisseurs';
import {Router} from '@angular/router';
import {FournisseurService} from '../services/fournisseur.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  fournisseurs: Fournisseur[] = [];
  selectedFournisseur: Fournisseur;
  addingFournisseur = false;
  error: any;
  showNgFor = false;

  constructor(private router: Router, private fournisseurService: FournisseurService) {
  }

  getFournisseur(): void {
    this.fournisseurService
      .getAllFournisseur()
      .subscribe(
        fournisseurs => (this.fournisseurs = fournisseurs),
        error => (this.error = error)
      );
  }

  addFournisseur(): void {
    this.addingFournisseur = true;
    this.selectedFournisseur = null;
  }

  ngOnInit() {
    this.getAllFournisseur();
  }

  getAllFournisseur() {
    this.fournisseurService.getAllFournisseur().pipe(
      map(data => data.map(fournisseursLine => {
        const fournisseurs: Fournisseur = new Fournisseur();
        fournisseurs.id = fournisseursLine.id;
        fournisseurs.denomination = fournisseursLine.denomination;
        fournisseurs.siret = fournisseursLine.siret;
        fournisseurs.adresse = fournisseursLine.adresse;
        fournisseurs.nomGerant = fournisseursLine.nomGerant;
        fournisseurs.prenomGerant = fournisseursLine.prenomGerant;
        return fournisseurs;
      }))
    ).subscribe(newFournisseurs => {
      this.fournisseurs = newFournisseurs;
    });
  }
}
