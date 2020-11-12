import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) {}

  getCountries() {
     // return this.http.get('assets/json/countries.json')
     //             .toPromise()
     //             .then(res => <any[]> res.json().data)
     //             .then(data => { return data; });
  }
}
