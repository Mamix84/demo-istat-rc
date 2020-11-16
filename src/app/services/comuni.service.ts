import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comune } from '../model/comune';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) {}

  caricaListaComuni() {
     return this.http.get('assets/json/comuni.json')
                  .toPromise()
                  .then(res => <any[]> res.valueOf())
                  .then(data => { return data; });
  }

  caricaStoricoComune(codiceComune: string ) {
    return this.http.get('assets/json/'+codiceComune+'.json')
                 .toPromise()
                 .then(res => <any[]> res.valueOf())
                 .then(data => { return data; });
 }
}
