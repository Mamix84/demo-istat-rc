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
  selector: 'app-tasso-natalita',
  templateUrl: './tasso-natalita.component.html',
  styleUrls: ['./tasso-natalita.component.scss'],
  providers: [MessageService],
})
export class TassoNatalitaComponent implements OnInit, OnChanges {
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
      if (
        this.comune.dati[i].tipo === 'MF' &&
        this.comune.dati[i].anno > 1982
      ) {
        labels.push(this.comune.dati[i].anno.toString());
      }
    }

    let totali: any[];

    totali = [];
    for (let i = 0; i < this.comune.dati.length; i++) {
      if (
        this.comune.dati[i].tipo === 'MF' &&
        this.comune.dati[i].anno > 1982
      ) {
        //ANNO CORRENTE
        let natiAnnoCorrente: number = this.comune.dati[i].valori[0];

        // POPOLAZIONE TOTALE ANNO CORRENTE
        let totaleAnnoCorrente: number = 0;
        for (let j = 0; j < this.comune.dati[i].valori.length; j++) {
          totaleAnnoCorrente += this.comune.dati[i].valori[j];
        }

        //POPOLAZIONE TOTALE ANNO PRECEDENTE
        let totaleAnnoPrecedente: number = 0;
        for (let j = 0; j < this.comune.dati[i - 1].valori.length; j++) {
          totaleAnnoPrecedente += this.comune.dati[i - 1].valori[j];
        }

        let tassoNatalita: number =
          (natiAnnoCorrente /
            ((totaleAnnoCorrente + totaleAnnoPrecedente) / 2)) *
          1000;
        totali.push(tassoNatalita.toFixed(2));
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

    //INTERPOLAZIONE
    let interpolazione: any[];
    interpolazione = [];
    let valoreInterpolazione: number;
    valoreInterpolazione = Number(totali[0]);
    let andamentoInterpolazione : number;
    andamentoInterpolazione = Number((totali[0]-totali[totali.length-1])/totali.length);
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
