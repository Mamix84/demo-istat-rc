import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { Comune } from 'src/app/model/comune';
import { IndicatoreService } from 'src/app/services/indicatore.service';

@Component({
  selector: 'app-grafico-linee',
  templateUrl: './grafico-linee.component.html',
  styleUrls: ['./grafico-linee.component.scss'],
  providers: [MessageService],
})
export class GraficoLineeComponent implements OnInit, OnChanges {
  @Input() comune: Comune;
  @Input() listaComuni: Comune[];
  @Input() indicatore: string = 'GRAFICO';
  @Input() indicatoreLabel: string = 'GRAFICO';
  @Input() interpolazione: boolean = false;
  andamento: any;
  ultimoAnno: number;
  primoAnno: number;
  variazionePercentuale: string;
  annoInizio: string;
  annoFine: string;
  datasets: any[];

  constructor(
    private messageService: MessageService,
    private indicatoreService: IndicatoreService
  ) {
    this.andamento = { labels: [], datasets: [] };
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.datasets = [];
    this.andamento = { labels: [], datasets: [] };

    if (this.listaComuni != undefined && this.listaComuni.length > 0) {
      this.preparaDatasetComuniMultipli();
    }
    if (this.comune != undefined) {
      this.preparaDatasetComuneSingolo();
    }
  }

  preparaDatasetComuneSingolo() {
    let indicatoreResponse = this.indicatoreService.valutaIndicatore(
      this.indicatore,
      this.comune
    );

    this.ultimoAnno =
      indicatoreResponse.totali[indicatoreResponse.totali.length - 1];
    this.primoAnno = indicatoreResponse.totali[0];
    this.variazionePercentuale = (
      100 -
      (this.primoAnno / this.ultimoAnno) * 100
    ).toFixed(2);
    this.annoInizio = indicatoreResponse.labels[0];
    this.annoFine =
      indicatoreResponse.labels[indicatoreResponse.labels.length - 1];

    if (this.interpolazione) {
      this.preparaInterpolazione(indicatoreResponse);
    }

    //COLOR
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    //DATASET
    this.datasets.push({
      label: this.indicatoreLabel,
      data: indicatoreResponse.totali,
      fill: false,
      borderColor: color,
    });

    this.andamento = {
      labels: indicatoreResponse.labels,
      datasets: this.datasets,
    };
  }

  preparaDatasetComuniMultipli() {
    let indicatoreResponse;
    for (let i = 0; i < this.listaComuni.length; i++) {
      indicatoreResponse = this.indicatoreService.valutaIndicatore(
        this.indicatore,
        this.listaComuni[i]
      );

      //COLOR
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      //DATASET
      this.datasets.push({
        label: this.listaComuni[i].denominazione.toUpperCase(),
        data: indicatoreResponse.totali,
        fill: false,
        borderColor: color,
      });
    }

    if (indicatoreResponse) {
      this.andamento = {
        labels: indicatoreResponse.labels,
        datasets: this.datasets,
      };
    }
  }

  preparaInterpolazione(indicatoreResponse: any) {
    //INTERPOLAZIONE
    let interpolazione: any[];
    interpolazione = [];
    let valoreInterpolazione: number;
    valoreInterpolazione = Number(indicatoreResponse.totali[0]);
    let andamentoInterpolazione: number;
    andamentoInterpolazione = Number(
      (indicatoreResponse.totali[0] -
        indicatoreResponse.totali[indicatoreResponse.totali.length - 1]) /
        (indicatoreResponse.totali.length - 1)
    );

    interpolazione.push(valoreInterpolazione);
    for (let i = 1; i < indicatoreResponse.totali.length; i++) {
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
