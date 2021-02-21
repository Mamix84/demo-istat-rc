import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comune } from '../model/comune';
import { DatoStatistico } from '../model/dati-statistici';

@Injectable({
  providedIn: 'root',
})
export class ComuneService {
  constructor(private http: HttpClient) {}

  caricaDati(codiceComune: string, indicatore: string) {
    let indicatore_path = '';
    switch (indicatore) {
      case 'POP': {
        indicatore_path = 'popolazione';
        break;
      }
      case 'NAT': {
        indicatore_path = 'nati';
        break;
      }
      case 'MOR': {
        indicatore_path = 'morti';
        break;
      }
      case 'IAC': {
        indicatore_path = 'iscritti_comune';
        break;
      }
      case 'CAC': {
        indicatore_path = 'cancellati_comune';
        break;
      }
      case 'IDE': {
        indicatore_path = 'iscritti_estero';
        break;
      }
      case 'CPE': {
        indicatore_path = 'cancellati_estero';
        break;
      }
    }

    return this.http
      .get('assets/json/' + indicatore_path + '/' + codiceComune + '.json')
      .toPromise()
      .then((res) => <any[]>res.valueOf())
      .then((data) => {
        let response: any = data;
        let comune: Comune = response;

        return comune;
      });
  }

  filtroSesso(comune: Comune, sessiSelezionati: string[]): Comune {
    let comuneFiltered: Comune = new Comune();

    comuneFiltered.codice = comune.codice;
    comuneFiltered.denominazione = comune.denominazione;
    comuneFiltered.dati = [];

    for (let i = 0; i < comune.dati.length; i++) {
      for (let j = 0; j < sessiSelezionati.length; j++) {
        if (sessiSelezionati[j] === comune.dati[i].sesso) {
          comuneFiltered.dati.push(comune.dati[i]);
        }
      }
    }

    return comuneFiltered;
  }

  recuperaDatoUltimoAnno(comune: Comune, sesso: string): number {
    let comuneTemp = new Comune();
    comuneTemp.dati = [];

    for (let i = 0; i < comune.dati.length; i++) {
      if (comune.dati[i].sesso === sesso) {
        comuneTemp.dati.push(
          Object.assign(new DatoStatistico(), comune.dati[i])
        );
      }
    }

    let somma = 0;
    for (
      let j = 0;
      j < comuneTemp.dati[comuneTemp.dati.length - 1].valori.length;
      j++
    ) {
      somma += comuneTemp.dati[comuneTemp.dati.length - 1].valori[j];
    }
    return somma;
  }

  recuperaDatoAnno(comune: Comune, sesso: string, anno: number): number {
    for (let i = 0; i < comune.dati.length; i++) {
      if (comune.dati[i].anno === anno && comune.dati[i].sesso === sesso) {
        let somma = 0;
        for (let j = 0; j < comune.dati[i].valori.length; j++) {
          somma += comune.dati[i].valori[j];
        }
        return somma;
      }
    }

    return 0;
  }

  filtroEta(
    comune: Comune,
    sesso: string,
    etaMin: number,
    etaMax: number
  ): Comune {
    let comuneFiltered: Comune = new Comune();

    comuneFiltered.codice = comune.codice;
    comuneFiltered.denominazione = comune.denominazione;
    comuneFiltered.dati = [];

    for (let i = 0; i < comune.dati.length; i++) {
      if (sesso === comune.dati[i].sesso) {
        let index = comuneFiltered.dati.push( Object.assign(new DatoStatistico(), comune.dati[i]));
        comuneFiltered.dati[index - 1].valori = comuneFiltered.dati[
          index - 1
        ].valori.slice(etaMin, etaMax);
      }
    }

    return comuneFiltered;
  }
}
