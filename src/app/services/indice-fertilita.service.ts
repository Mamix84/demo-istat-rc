import { Injectable } from '@angular/core';
import { Comune } from '../model/comune';

@Injectable({
  providedIn: 'root',
})
export class IndiceFertilitaService {
  constructor() {}

  valutaIndicatore(comune: Comune): any {
    //ANDAMENTO
    let labels: string[];
    labels = [];
    for (let i = 0; i < comune.dati.length; i++) {
      if (comune.dati[i].tipo === 'MF') {
        labels.push(comune.dati[i].anno.toString());
      }
    }

    let totali: any[];

    totali = [];
    for (let i = 0; i < comune.dati.length; i++) {
      if (comune.dati[i].tipo === 'MF') {
        let somma = 0;
        let fascia0 = comune.dati[i].valori[0];
        for (let j = 14; j < 50; j++) {
          somma += comune.dati[i].valori[j];
        }
        let indiceFertilita: number = (fascia0 / somma) * 1000;
        totali.push(indiceFertilita.toFixed(2));
      }
    }

    return { labels: labels, totali: totali };
  }
}
