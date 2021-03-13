import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Indicatori } from 'src/app/enum/indicatori.enum';
import { Comune } from 'src/app/model/comune';
import { ComuneService } from 'src/app/services/comune.service';

@Component({
  selector: 'app-visualizza-storico',
  templateUrl: './visualizza-storico.component.html',
  styleUrls: ['./visualizza-storico.component.scss'],
})
export class VisualizzaStoricoComponent implements OnInit {
  storicoComune: Comune;
  frozenCols: any[];

  anni: SelectItem[];

  annoSelezionato: string;
  comuneSelezionato: string;
  sessoSelezionato: string;
  indicatoreSelezionato: string;

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI SINGOLI' },
    { label: 'VISUALIZZA STORICO' },
  ];

  constructor(private comuneService: ComuneService) {
    this.storicoComune = new Comune();
    this.storicoComune.dati = [];
    this.anni = [];
  }

  ngOnInit(): void {
    this.frozenCols = [{ field: 'comune.anno', header: 'ANNO' }];

    // ANNI
    this.anni.push({ label: 'NESSUN FILTRO', value: undefined });
    for (let i = 1982; i < 2021; i++) {
      this.anni.push({ label: i + '', value: i + '' });
    }
  }

  caricaStoricoComune() {
    this.comuneService
      .caricaDati(this.comuneSelezionato, Indicatori.POPOLAZIONE)
      .then((data) => {
        let response: any = data;
        let storicoComuneResp: Comune = response;
        let storicoComuneTemp: Comune = new Comune();


        storicoComuneTemp.codice = storicoComuneResp.codice;
        storicoComuneTemp.denominazione = storicoComuneResp.denominazione;
        storicoComuneTemp.dati = [];

        for (let i = 0; i < storicoComuneResp.dati.length; i++) {
          if (
            (this.annoSelezionato === undefined ||
              this.annoSelezionato === '') &&
            (this.sessoSelezionato === undefined ||
              this.sessoSelezionato === '')
          ) {
            storicoComuneTemp.dati.push(storicoComuneResp.dati[i]);
          }
          if (
            (storicoComuneResp.dati[i].anno.toString() ==
              this.annoSelezionato &&
              (storicoComuneResp.dati[i].sesso == this.sessoSelezionato ||
                this.sessoSelezionato === undefined)) ||
            (storicoComuneResp.dati[i].sesso == this.sessoSelezionato &&
              (storicoComuneResp.dati[i].anno.toString() ==
                this.annoSelezionato ||
                this.annoSelezionato === undefined))
          ) {
            storicoComuneTemp.dati.push(storicoComuneResp.dati[i]);
          }
        }

        this.storicoComune = storicoComuneTemp;
      });

  }

  comuneSelezionatoEvent(comune: string) {
    this.comuneSelezionato = comune;

    this.caricaStoricoComune();
  }

  annoSelezionatoEvent(event: any) {
    this.annoSelezionato = event.value;

    this.caricaStoricoComune();
  }

  sessoSelezionatoEvent(sesso: string) {
    this.sessoSelezionato = sesso;

    this.caricaStoricoComune();
  }

  indicatoreSelezionatoEvent(indicatore: string) {
    this.indicatoreSelezionato = indicatore;

    this.caricaStoricoComune();
  }
}
