import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Comune } from 'src/app/model/comune';
import { ComuneService } from 'src/app/services/comune.service';
import { Indicatori } from 'src/app/enum/indicatori.enum';
import { DominiService } from 'src/app/widget/services/domini.service';

@Component({
  selector: 'app-grafici-popolazione-area',
  templateUrl: './grafici-popolazione-area.component.html',
  styleUrls: ['./grafici-popolazione-area.component.scss'],
  providers: [MessageService],
})
export class GraficiPopolazioneAreaComponent implements OnInit {
  sessoSelezionato: string;
  storicoComune: Comune;

  andamento: any;
  andamentoTotale: any;

  areaSelezionata: string;
  denominazioneArea: string;

  datasets: any[];
  datasetsTotale: any[];
  totaliArea: any[];

  menuItem = [{ label: 'STATISTICHE AREA' }, { label: 'GRAFICI POPOLAZIONE' }];

  constructor(
    private comuneService: ComuneService,
    private messageService: MessageService,
    private dominiService: DominiService
  ) {
    this.storicoComune = new Comune();
    this.storicoComune.dati = [];
    this.andamento = { labels: [], datasets: [] };
    this.datasets = [];
    this.datasetsTotale = [];
    this.totaliArea = [];
  }

  ngOnInit(): void {}

  caricaStoricoArea() {
    this.datasets = [];
    this.datasetsTotale = [];
    this.totaliArea = [];

    this.dominiService.caricaListaDominio('COMUNI').then((data) => {
      let response: any = data;

      for (let i = 0; i < response.listaDominio.length; i++) {
        let comuneTemp: Comune = response.listaDominio[i];
        if (comuneTemp.area === this.areaSelezionata) {
          this.caricaStoricoComune(comuneTemp.codice, comuneTemp.denominazione);
        }
      }
    });

  }

  caricaStoricoComune(comuneSelezionato: string, denominazione: string) {
    this.comuneService
      .caricaDati(comuneSelezionato, Indicatori.POPOLAZIONE)
      .then((data) => {
        let response: any = data;
        let storicoComuneTemp: Comune = response;

        this.storicoComune.codice = storicoComuneTemp.codice;
        this.storicoComune.denominazione = this.storicoComune.denominazione;
        this.storicoComune.dati = [];

        for (let i = 0; i < storicoComuneTemp.dati.length; i++) {
          if (this.sessoSelezionato === storicoComuneTemp.dati[i].sesso) {
            this.storicoComune.dati.push(storicoComuneTemp.dati[i]);
          }
        }

        //ANDAMENTO
        let labels: string[];
        labels = [];
        for (let i = 0; i < this.storicoComune.dati.length; i++) {
          if (this.storicoComune.dati[i].sesso === this.sessoSelezionato) {
            labels.push(this.storicoComune.dati[i].anno.toString());
          }
        }

        let totali: any[];
        totali = [];
        for (let i = 0; i < this.storicoComune.dati.length; i++) {
          if (this.storicoComune.dati[i].sesso === this.sessoSelezionato) {
            let somma = 0;
            for (let j = 0; j < this.storicoComune.dati[i].valori.length; j++) {
              somma += this.storicoComune.dati[i].valori[j];
            }
            totali.push(somma);
          }
        }

        //COLOR
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }

        this.datasets.push({
          label: denominazione.toUpperCase(),
          data: totali,
          fill: false,
          borderColor: color,
        });

        this.andamento = { labels: labels, datasets: this.datasets };

        this.aggiornaDatasetArea(totali);
      });
  }

  aggiornaDatasetArea(totali: any[]) {
    if (this.totaliArea.length === 0) {
      for (let j = 0; j < totali.length; j++) {
        this.totaliArea.push(0);
      }
    }
    for (let j = 0; j < totali.length; j++) {
      this.totaliArea[j] = this.totaliArea[j] + totali[j];
    }

    //COLOR
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    if (this.datasetsTotale.length === 0) {
      this.datasetsTotale.push({
        label: 'AREA ' + this.denominazioneArea,
        data: this.totaliArea,
        fill: false,
        borderColor: color,
      });
    } else {
      this.datasetsTotale[0] = {
        label: 'POPOLAZIONE AREA ',
        data: this.totaliArea,
        fill: true,
        borderColor: color,
      };
    }

    this.andamentoTotale = {
      labels: this.andamento === undefined ? [] : this.andamento.labels,
      datasets: this.datasetsTotale,
    };
  }

  selectData(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Data Selected',
      detail: this.andamento.datasets[event.element._datasetIndex].data[
        event.element._index
      ],
    });
  }

  areaSelezionataEvent(event: any) {
    this.areaSelezionata = event;

    this.caricaStoricoArea();
  }

  sessoSelezionatoEvent(event: any) {
    this.sessoSelezionato = event;

    this.caricaStoricoArea();
  }
}
