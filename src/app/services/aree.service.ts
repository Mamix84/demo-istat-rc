import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AreeService {
  constructor(private http: HttpClient) {}

  caricaListaAree() {
    return this.http
      .get('assets/json/domini/aree.json')
      .toPromise()
      .then((res) => <any[]>res.valueOf())
      .then((data) => {
        return data;
      });
  }
}
