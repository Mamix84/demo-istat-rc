import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Comune } from 'src/app/model/comune';
import { ComuniService } from 'src/app/services/comuni.service';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.scss'],
})
export class StatisticheComponent implements OnInit {
  comuneSelezionato: string;
  comuni: SelectItem[];
  sessiSelezionati: string[];
  sessi: SelectItem[];
  storicoComune: Comune;

  constructor(private comuniService: ComuniService) {
    this.comuni = [];
    this.storicoComune = new Comune();
    this.storicoComune.dati = [];
    this.sessi = [];
    this.sessiSelezionati = [];
  }

  ngOnInit(): void {
    // COMUNI
    this.comuniService.caricaListaComuni().then((data) => {
      let response: any = data;
      this.comuni.push({ label: 'Nessun filtro', value: undefined });
      for (let i = 0; i < response.listaComuni.length; i++) {
        let comuneTemp: Comune = response.listaComuni[i];
        this.comuni.push({
          value: comuneTemp.codice,
          label: comuneTemp.denominazione,
        });
      }
    });

    //SESSI
    this.sessi.push({ label: 'Nessun filtro', value: undefined });
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
            if (this.sessiSelezionati[j] === storicoComuneTemp.dati[i].tipo) {
              this.storicoComune.dati.push(storicoComuneTemp.dati[i]);
            }
          }
        }
      });
  }
}
