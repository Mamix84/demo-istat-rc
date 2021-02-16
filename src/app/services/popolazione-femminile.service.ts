import { Injectable } from '@angular/core';
import { Comune } from '../model/comune';

@Injectable({
  providedIn: 'root'
})
export class PopolazioneFemminileService {

  constructor() { }

  valutaIndicatore(comune: Comune): any{
        //ANDAMENTO
        let labels: string[];
        labels = [];
        for (let i = 0; i < comune.dati.length; i++) {
          if (comune.dati[i].sesso === 'F') {
            labels.push(comune.dati[i].anno.toString());
          }
        }

        let totali: any[];

        totali = [];
        totali = [];
        for (let i = 0; i < comune.dati.length; i++) {
          if (comune.dati[i].sesso === 'F') {
            let somma = 0;
            for (let j = 0; j < comune.dati[i].valori.length; j++) {
              somma += comune.dati[i].valori[j];
            }
            totali.push(somma);
          }
        }


    return {labels: labels, totali: totali};
  }
}
