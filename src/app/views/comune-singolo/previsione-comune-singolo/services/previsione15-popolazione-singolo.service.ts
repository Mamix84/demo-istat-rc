import { Injectable } from '@angular/core';
import { Comune } from 'src/app/model/comune';

@Injectable({
  providedIn: 'root'
})
export class Previsione15PopolazioneSingoloService {

  constructor() { }

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
        for (let j = 0; j < comune.dati[i].valori.length; j++) {
          somma += comune.dati[i].valori[j];
        }
        totali.push(somma);
      }
    }

    for (let i = parseInt(labels[labels.length-1]); i < 2100; i++) {
      labels.push((i + 1) + '');
      let previsioneTotale = totali[totali.length - 1] * this.calcolaPrevisione(totali);
      totali.push(previsioneTotale.toFixed(0));
    }

    return { labels: labels, totali: totali };
  }

  calcolaPrevisione(totali: any[]): number {
    console.log('Iterazione ' + totali.length);
    let mediaAnni = 0;
    let totaleAnni = 0;
    for (let i = totali.length - 1; i > totali.length - 15; i--) {
      totaleAnni += (totali[i] - totali[i - 1]) / totali[i];
    }

    mediaAnni = 1 + totaleAnni / 15;

    return mediaAnni;
  }
}
