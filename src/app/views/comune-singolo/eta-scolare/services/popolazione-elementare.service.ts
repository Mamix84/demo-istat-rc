import { Injectable } from '@angular/core';
import { Comune } from 'src/app/model/comune';

@Injectable({
  providedIn: 'root',
})
export class PopolazioneElementareService {
  constructor() {}

  valutaIndicatore(comune: Comune): any {
    //ANDAMENTO
    let labels: string[];
    labels = [];
    for (let i = 0; i < comune.dati.length; i++) {
      if (comune.dati[i].sesso === 'MF') {
        labels.push(comune.dati[i].anno.toString());
      }
    }

    let totali: any[];

    totali = [];
    totali = [];
    for (let i = 0; i < comune.dati.length; i++) {
      if (comune.dati[i].sesso === 'MF') {
        let somma = 0;
        for (let j = 6; j < 11; j++) {
          somma += comune.dati[i].valori[j];
        }
        totali.push(somma);
      }
    }

    return { labels: labels, totali: totali };
  }
}
