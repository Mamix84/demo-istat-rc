import { Injectable } from '@angular/core';
import { Comune } from 'src/app/model/comune';

@Injectable({
  providedIn: 'root',
})
export class PopolazioneMediaSuperioreService {
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
    totali = [];
    for (let i = 0; i < comune.dati.length; i++) {
      if (comune.dati[i].tipo === 'MF') {
        let somma = 0;
        for (let j = 14; j < 19; j++) {
          somma += comune.dati[i].valori[j];
        }
        totali.push(somma);
      }
    }

    return { labels: labels, totali: totali };
  }
}
