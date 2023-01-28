import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  sommatoria(valori: number[]): number {
    let somma = 0;
    for (let i = 0; i < valori.length; i++) {
      somma += valori[i];
    }
    return somma;
  }
}
