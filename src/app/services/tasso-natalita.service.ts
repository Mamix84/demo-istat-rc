import { Injectable } from '@angular/core';
import { Comune } from '../model/comune';

@Injectable({
  providedIn: 'root'
})
export class TassoNatalitaService {

  constructor() { }

  valutaIndicatore(comune: Comune): any {
    //ANDAMENTO
    let labels: string[];
    labels = [];
    for (let i = 0; i < comune.dati.length; i++) {
      if (
        comune.dati[i].sesso === 'MF' &&
        comune.dati[i].anno > 1982
      ) {
        labels.push(comune.dati[i].anno.toString());
      }
    }

    let totali: any[];

    totali = [];
    for (let i = 0; i < comune.dati.length; i++) {
      if (
        comune.dati[i].sesso === 'MF' &&
        comune.dati[i].anno > 1982
      ) {
        //ANNO CORRENTE
        let natiAnnoCorrente: number = comune.dati[i].valori[0];

        // POPOLAZIONE TOTALE ANNO CORRENTE
        let totaleAnnoCorrente: number = 0;
        for (let j = 0; j < comune.dati[i].valori.length; j++) {
          totaleAnnoCorrente += comune.dati[i].valori[j];
        }

        //POPOLAZIONE TOTALE ANNO PRECEDENTE
        let totaleAnnoPrecedente: number = 0;
        for (let j = 0; j < comune.dati[i - 1].valori.length; j++) {
          totaleAnnoPrecedente += comune.dati[i - 1].valori[j];
        }

        let tassoNatalita: number =
          (natiAnnoCorrente /
            ((totaleAnnoCorrente + totaleAnnoPrecedente) / 2)) *
          1000;
        totali.push(tassoNatalita.toFixed(2));
      }
    }

    return { labels: labels, totali: totali };
  }
}
