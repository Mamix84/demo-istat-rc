import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DominiService {
  constructor(private http: HttpClient) {}

  caricaListaDominio(dominio: string) {
    let path: string = '';
    switch (dominio) {
      case 'INDICATORE': {
        path = 'indicatori';
        break;
      }
      case 'SESSO': {
        path = 'sessi';
        break;
      }
      case 'SESSI': {
        path = 'sessi';
        break;
      }
      case 'COMUNE': {
        path = 'comuni';
        break;
      }
      case 'COMUNI': {
        path = 'comuni';
        break;
      }
      case 'AREA': {
        path = 'aree';
        break;
      }
      case 'ANNO INIZIO': {
        path = 'anno_inizio';
        break;
      }  
      case 'ANNO FINE': {
        path = 'anno_fine';
        break;
      }             
    }

    return this.http
      .get('assets/json/domini/' + path + '.json')
      .toPromise()
      .then((res) => <any[]>res.valueOf())
      .then((data) => {
        return data;
      });
  }
}
