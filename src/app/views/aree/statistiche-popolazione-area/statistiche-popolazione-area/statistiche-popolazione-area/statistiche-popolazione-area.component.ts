import { Component, OnInit } from '@angular/core';
import { Indicatori } from 'src/app/enum/indicatori.enum';
import { Sessi } from 'src/app/enum/sessi.enum';
import { Comune } from 'src/app/model/comune';
import { Dominio } from 'src/app/model/dominio';
import { AreeService } from 'src/app/services/aree.service';
import { ComuneService } from 'src/app/services/comune.service';
import { DominiService } from 'src/app/widget/services/domini.service';

@Component({
  selector: 'app-statistiche-popolazione-area',
  templateUrl: './statistiche-popolazione-area.component.html',
  styleUrls: ['./statistiche-popolazione-area.component.scss']
})
export class StatistichePopolazioneAreaComponent implements OnInit {

  menuItem = [{ label: 'STATISTICHE AREA' }, { label: 'STATISTICHE POPOLAZIONE' }];

  rangeAnno: number[] = [1982, 2023];
  aree: Dominio[];
  storicoComune: Comune;
  statisticheAree: any[];
  popolazioneStart = [];
  popolazioneEnd = [];

  constructor(
    private comuneService: ComuneService,
    private dominiService: DominiService,
    private areeService: AreeService
  ) {
    this.aree = [];
    this.storicoComune = new Comune();
    this.storicoComune.dati = [];
    this.statisticheAree = [];
  }

  ngOnInit(): void {
    this.areeService.caricaListaAree().then((data) => {
      let response: any = data;
      this.aree = response.listaDominio;
    });
    this.changeRange();
  }

  changeRange() {
    if (this.rangeAnno[0] < this.rangeAnno[1]) {
      this.popolazioneStart = [0, 0, 0, 0];
      this.popolazioneEnd = [0, 0, 0, 0];
      this.caricaStoricoArea();
    }
  }


  caricaStoricoArea() {
    this.dominiService.caricaListaDominio('COMUNI').then((data) => {
      let response: any = data;

      this.statisticheAree = [];

      for (let k = 0; k < this.aree.length; k++) {
        for (let i = 0; i < response.listaDominio.length; i++) {
          let comuneTemp: Comune = response.listaDominio[i];
          if (comuneTemp.area === this.aree[k].codice) {
            this.caricaStoricoComune(comuneTemp.codice, k);
          }
        }
      }
    });

  }

  caricaStoricoComune(comuneSelezionato: string, indiceArea: number) {
    this.comuneService
      .caricaDati(comuneSelezionato, Indicatori.POPOLAZIONE)
      .then((data) => {
        let response: any = data;
        let storicoComuneTemp: Comune = response;

        this.storicoComune.codice = storicoComuneTemp.codice;
        this.storicoComune.denominazione = this.storicoComune.denominazione;
        this.storicoComune.dati = [];

        for (let i = 0; i < storicoComuneTemp.dati.length; i++) {
          if (Sessi.TOTALE === storicoComuneTemp.dati[i].sesso) {
            this.storicoComune.dati.push(storicoComuneTemp.dati[i]);
          }
        }

        // POPOLAZIONE START
        let totali: any[];
        totali = [];
        for (let i = 0; i < this.storicoComune.dati.length; i++) {
          if (this.storicoComune.dati[i].sesso === Sessi.TOTALE && this.storicoComune.dati[i].anno === this.rangeAnno[0]) {
            let somma = 0;
            for (let j = 0; j < this.storicoComune.dati[i].valori.length; j++) {
              somma += this.storicoComune.dati[i].valori[j];
            }
            this.popolazioneStart[indiceArea] = this.popolazioneStart[indiceArea] + somma;
          }
        }

        // POPOLAZIONE END
        totali = [];
        for (let i = 0; i < this.storicoComune.dati.length; i++) {
          if (this.storicoComune.dati[i].sesso === Sessi.TOTALE && this.storicoComune.dati[i].anno === this.rangeAnno[1]) {
            let somma = 0;
            for (let j = 0; j < this.storicoComune.dati[i].valori.length; j++) {
              somma += this.storicoComune.dati[i].valori[j];
            }
            this.popolazioneEnd[indiceArea] = this.popolazioneEnd[indiceArea] + somma;
          }
        }

        this.statisticheAree[indiceArea] = {
          'descrizione': this.aree[indiceArea].denominazione,
          'popolazioneStart': this.popolazioneStart[indiceArea],
          'popolazioneEnd': this.popolazioneEnd[indiceArea],
          'delta': this.popolazioneEnd[indiceArea] - this.popolazioneStart[indiceArea],
          'deltaPerc': Number.parseFloat(((this.popolazioneEnd[indiceArea] - this.popolazioneStart[indiceArea]) / this.popolazioneEnd[indiceArea] * 100)+"").toPrecision(3)
        };

        let popolazioneStartTotale : number = this.popolazioneStart[0] + this.popolazioneStart[1] + this.popolazioneStart[2] + this.popolazioneStart[3];
        let popolazioneEndTotale : number= this.popolazioneEnd[0] + this.popolazioneEnd[1] + this.popolazioneEnd[2] + this.popolazioneEnd[3];
        let deltaTotale : number = popolazioneEndTotale - popolazioneStartTotale;
        let deltaPercTotale : number = deltaTotale / popolazioneEndTotale * 100;
        this.statisticheAree[4] = {
          'descrizione': 'Totali',
          'popolazioneStart': popolazioneStartTotale,
          'popolazioneEnd': popolazioneEndTotale,
          'delta': deltaTotale,
          'deltaPerc': Number.parseFloat(deltaPercTotale+"").toPrecision(3)
        };
      });
  }


  annoSelezionatoStart(event: any) {
    this.rangeAnno[0] = Number(event);

    this.changeRange();
  }

  annoSelezionatoEnd(event: any) {
    this.rangeAnno[1] = Number(event);

    this.changeRange();
  }
}
