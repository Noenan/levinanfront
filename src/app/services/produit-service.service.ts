import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  url = 'http://localhost:8081/';

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.url + 'produits');

  }
}


