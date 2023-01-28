import { Injectable } from '@angular/core';
import { Indicatori } from '../enum/indicatori.enum';
import { Sessi } from '../enum/sessi.enum';
import { Comune } from '../model/comune';
import { DatoStatistico } from '../model/dati-statistici';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class StatisticheService {
  constructor(private utilityService: UtilityService) {}

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
    let annoFinale = comuneFiltered.dati[comuneFiltered.dati.length - 1].anno;
    let anniPrevisione = 2050 - annoFinale + 1;
    for (let anno = 0; anno < anniPrevisione; anno++) {
      let datoDaAggiungere = new DatoStatistico();
      datoDaAggiungere.anno = annoFinale + anno + 1;
      datoDaAggiungere.indicatore = Indicatori.POPOLAZIONE;
      datoDaAggiungere.sesso = Sessi.TOTALE;
      datoDaAggiungere.valori = [];

      let valori = [];
      valori = comuneFiltered.dati[comuneFiltered.dati.length - 1].valori;
      valori.unshift(0);

      for (let i = 0; i < 86; i++) {
        let averageValue = 0;
        let deltaPopolazione = 0;
        let forecastPopolazione = 0;

        deltaPopolazione =
          (comuneFiltered.dati[comuneFiltered.dati.length - 1].valori[i] -
            comuneFiltered.dati[comuneFiltered.dati.length - 1 - anni].valori[
              i
            ]) /
          comuneFiltered.dati[comuneFiltered.dati.length - 1].valori[i];

        forecastPopolazione =
          comuneFiltered.dati[comuneFiltered.dati.length - 1].valori[i] *
          (1 - deltaPopolazione);

        forecastPopolazione = Math.round(forecastPopolazione);

        valori.push(forecastPopolazione < 0 ? 0 : forecastPopolazione);
      }

      datoDaAggiungere.valori = valori;

      comuneFiltered.dati.push(datoDaAggiungere);
    }

    return comuneFiltered;
  }

  tassoNatalita(comune: Comune): Comune {
    let comuneTasso = new Comune();
    comuneTasso.codice = comune.codice;
    comuneTasso.denominazione = comune.denominazione;
    comuneTasso.dati = [];

    for (let i = 0; i < comune.dati.length; i++) {
      if (Sessi.TOTALE === comune.dati[i].sesso) {
        comuneTasso.dati.push(
          Object.assign(new DatoStatistico(), comune.dati[i])
        );
      }
    }

    for (let j = 1; j < comuneTasso.dati.length; j++) {
      let valoriTasso = [];
      let tasso =
        (comune.dati[j].valori[0] /
          ((this.utilityService.sommatoria(comune.dati[j].valori) +
            this.utilityService.sommatoria(comune.dati[j - 1].valori))/2)) *
        1000;

      let tassoStr = tasso.toFixed(2);
      valoriTasso.push(Number.parseFloat(tassoStr));
      comuneTasso.dati[j].valori = valoriTasso;
    }

    comuneTasso.dati = comuneTasso.dati.slice(1);

    return comuneTasso;
  }

  tassoFertilita(comune: Comune): Comune {
    let comuneTasso = new Comune();
    comuneTasso.codice = comune.codice;
    comuneTasso.denominazione = comune.denominazione;
    comuneTasso.dati = [];

    for (let i = 0; i < comune.dati.length; i++) {
      if (Sessi.TOTALE === comune.dati[i].sesso) {
        comuneTasso.dati.push(
          Object.assign(new DatoStatistico(), comune.dati[i])
        );
      }
    }

    return comuneTasso;
  }
}
