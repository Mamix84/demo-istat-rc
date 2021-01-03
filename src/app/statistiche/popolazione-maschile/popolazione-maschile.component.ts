import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Comune } from 'src/app/model/comune';

@Component({
  selector: 'app-popolazione-maschile',
  templateUrl: './popolazione-maschile.component.html',
  styleUrls: ['./popolazione-maschile.component.scss'],
  providers: [MessageService],
})
export class PopolazioneMaschileComponent implements OnInit {
  @Input() comune: Comune;
  andamento: any;
  ultimoAnno: number;
  primoAnno: number;
  variazionePercentuale: string;
  annoInizio: string;
  annoFine: string;

  constructor(private messageService: MessageService) {
    this.andamento = { labels: [], datasets: [] };
  }
  ngOnChanges(changes: SimpleChanges): void {
    //ANDAMENTO
    let labels: string[];
    labels = [];
    for (let i = 0; i < this.comune.dati.length; i++) {
      if (this.comune.dati[i].tipo === 'M' && this.comune.dati[i].anno > 1982) {
        labels.push(this.comune.dati[i].anno.toString());
      }
    }

    let totali: any[];

    totali = [];
    totali = [];
    for (let i = 0; i < this.comune.dati.length; i++) {
      if (this.comune.dati[i].tipo === 'M') {
        let somma = 0;
        for (let j = 0; j < this.comune.dati[i].valori.length; j++) {
          somma += this.comune.dati[i].valori[j];
        }
        totali.push(somma);
      }
    }

    this.ultimoAnno = totali[totali.length - 1];
    this.primoAnno = totali[0];
    this.variazionePercentuale = (
      100 -
      (this.primoAnno / this.ultimoAnno) * 100
    ).toFixed(2);
    this.annoInizio = labels[0];
    this.annoFine = labels[labels.length - 1];

    //COLOR
    let letters = '0123456789ABCDEF';
    let color = '#0023ff';

    //DATASET
    let datasets: any[];
    datasets = [];
    datasets.push({
      label: this.comune.denominazione + ' - ' + 'M',
      data: totali,
      fill: false,
      borderColor: color,
    });

    //INTERPOLAZIONE
    let interpolazione: any[];
    interpolazione = [];
    let valoreInterpolazione: number;
    valoreInterpolazione = Number(totali[0]);
    let andamentoInterpolazione: number;
    andamentoInterpolazione = Number(
      (totali[0] - totali[totali.length - 1]) / totali.length
    );
    for (let i = 0; i < totali.length; i++) {
      valoreInterpolazione -= andamentoInterpolazione;
      interpolazione.push(valoreInterpolazione);
    }

    datasets.push({
      label: 'Andamento lineare',
      data: interpolazione,
      fill: false,
      borderColor: 'darkGrey',
    });

    this.andamento = {
      labels: labels,
      datasets: datasets,
    };
  }

  ngOnInit(): void {}

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
