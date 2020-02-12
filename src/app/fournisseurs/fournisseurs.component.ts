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

  getFournisseurs(): void {
    this.fournisseurService
      .getAllFournisseurs()
      .subscribe(
        fournisseurs => (this.fournisseurs = fournisseurs),
        error => (this.error = error)
      );
  }

  addFournisseurs(): void {
    this.addingFournisseur = true;
    this.selectedFournisseur = null;
  }

  ngOnInit() {
    this.getAllFournisseurs();
  }

  getAllFournisseurs() {
    this.fournisseurService.getAllFournisseurs().pipe(
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
    ).subscribe(newFournisseur => {
      this.fournisseurs = newFournisseur;
    });
  }
}
