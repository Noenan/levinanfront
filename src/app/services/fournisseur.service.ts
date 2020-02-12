import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  url = 'http://localhost:8081/';
  crossDomain = true;

  constructor(private http: HttpClient) {
  }

  getAllFournisseur(): Observable<any> {
    return this.http.get<any>(this.url + 'fournisseurs');

  }
}
