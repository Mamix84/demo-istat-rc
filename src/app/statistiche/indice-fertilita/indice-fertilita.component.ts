import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { Comune } from 'src/app/model/comune';

@Component({
  selector: 'app-indice-fertilita',
  templateUrl: './indice-fertilita.component.html',
  styleUrls: ['./indice-fertilita.component.scss'],
  providers: [MessageService],
})
export class IndiceFertilitaComponent implements OnInit, OnChanges {
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
      if (this.comune.dati[i].tipo === 'MF') {
        labels.push(this.comune.dati[i].anno.toString());
      }
    }

    let totali: any[];

    totali = [];
    for (let i = 0; i < this.comune.dati.length; i++) {
      if (this.comune.dati[i].tipo === 'MF') {
        let somma = 0;
        let fascia0 = this.comune.dati[i].valori[0];
        for (let j = 14; j < 50; j++) {
          somma += this.comune.dati[i].valori[j];
        }
        let indiceFertilita: number = (fascia0 / somma) * 1000;
        totali.push(indiceFertilita.toFixed(2));
      }
    }

    this.ultimoAnno = totali[totali.length - 1];
    this.primoAnno = totali[0];
    this.variazionePercentuale = (100 - (this.primoAnno / this.ultimoAnno) * 100).toFixed(2);
    this.annoInizio = labels[0];
    this.annoFine = labels[labels.length - 1];

    //COLOR
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    //DATASET
    let datasets: any[];
    datasets = [];
    datasets.push({
      label: this.comune.denominazione + ' - ' + 'MF',
      data: totali,
      fill: false,
      borderColor: color,
    });

    this.andamento = { labels: labels, datasets: datasets };
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
