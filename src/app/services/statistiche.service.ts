import { Injectable } from '@angular/core';
import { Sessi } from '../enum/sessi.enum';
import { Comune } from '../model/comune';
import { DatoStatistico } from '../model/dati-statistici';

@Injectable({
  providedIn: 'root',
})
export class StatisticheService {
  constructor() {}

  calcolaPrevisione(comune: Comune, anni: number): Comune {
    let comuneFiltered: Comune = new Comune();

    comuneFiltered.codice = comune.codice;
    comuneFiltered.denominazione = comune.denominazione;
    comuneFiltered.dati = [];

    //ANDAMENTO FINO A ULTIMO ANNO
    for (let i = 0; i < comune.dati.length; i++) {
      if (Sessi.TOTALE === comune.dati[i].sesso) {
        comuneFiltered.dati.push(
          Object.assign(new DatoStatistico(), comune.dati[i])
        );
      }
    }

    //PREVISIONE ANNI FUTURI
    for (let i = comuneFiltered.dati.length; i < 2100; i++) {}

    return comuneFiltered;
  }
}
