import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { Comune } from 'src/app/model/comune';
import { ComuniService } from 'src/app/services/comuni.service';

@Component({
  selector: 'app-confronta-comuni',
  templateUrl: './confronta-comuni.component.html',
  styleUrls: ['./confronta-comuni.component.scss'],
  providers: [MessageService],
})
export class ConfrontaComuniComponent implements OnInit {
  comuniSelezionati: string[];
  comuni: SelectItem[];
  sessoSelezionato: string;
  sessi: SelectItem[];
  storicoComune: Comune;
  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI MULTIPLI' },
    { label: 'CONFRONTO GRAFICI POPOLAZIONE' },
  ];

  andamento: any;

  constructor(
    private comuniService: ComuniService,
    private messageService: MessageService
  ) {
    this.comuni = [];
    this.comuniSelezionati = [];
    this.storicoComune = new Comune();
    this.storicoComune.dati = [];
    this.sessi = [];
    this.andamento = { labels: [], datasets: [] };
    this.sessoSelezionato = '';
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
    this.sessi.push({ label: 'NESSUN FILTRO', value: undefined });
    this.sessi.push({ value: 'M', label: 'MASCHI' });
    this.sessi.push({ value: 'F', label: 'FEMMINE' });
    this.sessi.push({ value: 'MF', label: 'MASCHI+FEMMINE' });
  }

  caricaStoricoComune() {
    //DATASET
    let datasets: any[];
    datasets = [];

    this.andamento = { labels: [], datasets: [] };
    for (let i = 0; i < this.comuniSelezionati.length; i++) {
      this.comuniService
        .caricaStoricoComune(this.comuniSelezionati[i])
        .then((data) => {
          let response: any = data;
          let storicoComuneTemp: Comune = response;

          this.storicoComune.codice = storicoComuneTemp.codice;
          this.storicoComune.denominazione = this.storicoComune.denominazione;
          this.storicoComune.dati = [];

          for (let i = 0; i < storicoComuneTemp.dati.length; i++) {
            if (this.sessoSelezionato === storicoComuneTemp.dati[i].tipo) {
              this.storicoComune.dati.push(storicoComuneTemp.dati[i]);
            }
          }

          //ANDAMENTO
          let labels: string[];
          labels = [];
          for (let i = 0; i < this.storicoComune.dati.length; i++) {
            if (this.storicoComune.dati[i].tipo === this.sessoSelezionato) {
              labels.push(this.storicoComune.dati[i].anno.toString());
            }
          }

          let totali: any[];

          totali = [];
          for (let i = 0; i < this.storicoComune.dati.length; i++) {
            if (this.storicoComune.dati[i].tipo === this.sessoSelezionato) {
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
          let letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }

          datasets.push({
            label: this.comuniSelezionati[i] + ' - ' + this.sessoSelezionato,
            data: totali,
            fill: false,
            borderColor: color,
          });

          this.andamento = { labels: labels, datasets: datasets };
        });
    }
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
