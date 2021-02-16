import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { ComuniService } from 'src/app/domini-services/comuni.service';
import { Comune } from 'src/app/model/comune';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.scss'],
  providers: [MessageService],
})
export class GraficiComponent implements OnInit {
  comuneSelezionato: string;
  comuni: SelectItem[];
  sessiSelezionati: string[];
  sessi: SelectItem[];
  storicoComune: Comune;

  andamento: any;

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI SINGOLI' },
    { label: 'GRAFICI POPOLAZIONE' },
  ];

  constructor(
    private comuniService: ComuniService,
    private messageService: MessageService
  ) {
    this.comuni = [];
    this.storicoComune = new Comune();
    this.storicoComune.dati = [];
    this.sessi = [];
    this.andamento = { labels: [], datasets: [] };
    this.sessiSelezionati = [];
  }

  ngOnInit(): void {
    // COMUNI
    this.comuniService.caricaListaComuni().then((data) => {
      let response: any = data;
      this.comuni.push({ label: 'NESSUN FILTRO', value: undefined });
      for (let i = 0; i < response.listaComuni.length; i++) {
        let comuneTemp: Comune = response.listaComuni[i];
        this.comuni.push({
          value: comuneTemp.codice,
          label: comuneTemp.denominazione.toUpperCase(),
        });
      }
    });

    //SESSI
    this.sessi.push({ value: 'M', label: 'MASCHI' });
    this.sessi.push({ value: 'F', label: 'FEMMINE' });
    this.sessi.push({ value: 'MF', label: 'MASCHI+FEMMINE' });
  }

  caricaStoricoComune() {
    this.comuniService
      .caricaStoricoComune(this.comuneSelezionato)
      .then((data) => {
        let response: any = data;
        let storicoComuneTemp: Comune = response;

        this.storicoComune.codice = storicoComuneTemp.codice;
        this.storicoComune.denominazione = this.storicoComune.denominazione;
        this.storicoComune.dati = [];

        for (let i = 0; i < storicoComuneTemp.dati.length; i++) {
          for (let j = 0; j < this.sessiSelezionati.length; j++) {
            if (this.sessiSelezionati[j] === storicoComuneTemp.dati[i].sesso) {
              this.storicoComune.dati.push(storicoComuneTemp.dati[i]);
            }
          }
        }

        //ANDAMENTO
        let labels: string[];
        labels = [];
        for (let i = 0; i < this.storicoComune.dati.length; i++) {
          if (this.storicoComune.dati[i].sesso === this.sessiSelezionati[0]) {
            labels.push(this.storicoComune.dati[i].anno.toString());
          }
        }

        //DATASET
        let datasets: any[];
        datasets = [];

        let totali: any[];

        for (let k = 0; k < this.sessiSelezionati.length; k++) {
          totali = [];
          for (let i = 0; i < this.storicoComune.dati.length; i++) {
            if (this.storicoComune.dati[i].sesso === this.sessiSelezionati[k]) {
              let somma = 0;
              for (
                let j = 0;
                j < this.storicoComune.dati[i].valori.length;
                j++
              ) {
                somma += this.storicoComune.dati[i].valori[j];
              }
              totali.push(somma);
            }
          }

          //COLOR
          let color: string;
          switch (this.sessiSelezionati[k]) {
            case 'M': {
              color = '#0023ff';
              break;
            }
            case 'F': {
              color = '#ff00f5';
              break;
            }
            case 'MF': {
              color = '#474047';
              break;
            }
          }

          datasets.push({
            label: this.comuneSelezionato + ' - ' + this.sessiSelezionati[k],
            data: totali,
            fill: false,
            borderColor: color,
          });
        }

        this.andamento = { labels: labels, datasets: datasets };
      });
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
}
