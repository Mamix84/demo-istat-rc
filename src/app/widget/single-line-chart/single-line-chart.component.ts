import { SimpleChanges } from '@angular/core';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Comune } from 'src/app/model/comune';

@Component({
  selector: 'app-single-line-chart',
  templateUrl: './single-line-chart.component.html',
  styleUrls: ['./single-line-chart.component.scss'],
  providers: [MessageService],
})
export class SingleLineChartComponent implements OnInit, OnChanges {
  @Input() comune: Comune;
  @Input() label: string = 'GRAFICO';
  @Input() interpolazione: boolean = false;
  andamento: any;
  ultimoAnno: number;
  primoAnno: number;
  variazionePercentuale: string;
  annoInizio: string;
  annoFine: string;
  datasets: any[];

  constructor(private messageService: MessageService) {
    this.andamento = { labels: [], datasets: [] };
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.comune === undefined) return;


    this.datasets = [];

    //ANDAMENTO
    let labels: string[];
    labels = [];
    for (let i = 0; i < this.comune.dati.length; i++) {
      labels.push(this.comune.dati[i].anno.toString());
    }

    let totali: any[];
    totali = [];
    for (let i = 0; i < this.comune.dati.length; i++) {
      let somma = 0;
      for (let j = 0; j < this.comune.dati[i].valori.length; j++) {
        somma += this.comune.dati[i].valori[j];
      }
      totali.push(somma);
    }

    this.ultimoAnno = totali[totali.length - 1];
    this.primoAnno = totali[0];
    this.variazionePercentuale = (
      100 -
      (this.primoAnno / this.ultimoAnno) * 100
    ).toFixed(2);
    this.annoInizio = labels[0];
    this.annoFine = labels[labels.length - 1];

    if (this.interpolazione) {
      this.preparaInterpolazione(totali);
    }

    //COLOR
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    //DATASET
    this.datasets.push({
      label: this.label,
      data: totali,
      fill: false,
      borderColor: color,
    });

    this.andamento = {
      labels: labels,
      datasets: this.datasets,
    };
  }

  preparaInterpolazione(totali: any[]) {
    //INTERPOLAZIONE
    let interpolazione: any[];
    interpolazione = [];
    let valoreInterpolazione: number;
    valoreInterpolazione = Number(totali[0]);
    let andamentoInterpolazione: number;
    andamentoInterpolazione = Number(
      (totali[0] - totali[totali.length - 1]) / (totali.length - 1)
    );

    interpolazione.push(valoreInterpolazione);
    for (let i = 1; i < totali.length; i++) {
      valoreInterpolazione -= andamentoInterpolazione;
      interpolazione.push(valoreInterpolazione.toFixed(3));
    }

    this.datasets.push({
      label: 'ANDAMENTO LINEARE',
      data: interpolazione,
      fill: false,
      borderColor: 'darkGrey',
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
