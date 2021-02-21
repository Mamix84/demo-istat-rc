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
  selector: 'app-multi-line-chart',
  templateUrl: './multi-line-chart.component.html',
  styleUrls: ['./multi-line-chart.component.scss'],
  providers: [MessageService],
})
export class MultiLineChartComponent implements OnInit, OnChanges {
  @Input() listaComuni: Comune[];
  @Input() label: string = 'GRAFICO';
  @Input() interpolazione: boolean = false;
  andamento: any;
  datasets: any[];

  constructor(private messageService: MessageService) {
    this.andamento = { labels: [], datasets: [] };
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.listaComuni === undefined) return;

    this.datasets = [];
    let labels: string[];

    for (let k = 0; k < this.listaComuni.length; k++) {
      let comune = this.listaComuni[k];

      //ANDAMENTO

      labels = [];
      for (let i = 0; i < comune.dati.length; i++) {
        labels.push(comune.dati[i].anno.toString());
      }

      let totali: any[];
      totali = [];
      for (let i = 0; i < comune.dati.length; i++) {
        let somma = 0;
        for (let j = 0; j < comune.dati[i].valori.length; j++) {
          somma += comune.dati[i].valori[j];
        }
        totali.push(somma);
      }

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
        label: comune.denominazione.toUpperCase() + ' ' + comune.dati[0].sesso,
        data: totali,
        fill: false,
        borderColor: color,
      });
    }

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
