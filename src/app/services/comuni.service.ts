import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comune } from '../model/comune';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) {}

  getCountries() {
     return this.http.get('assets/json/comuni.json')
                  .toPromise()
                  .then(res => <any[]> res.valueOf())
                  .then(data => { return data; });
  }
}
