import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Comune } from 'src/app/model/comune';
import { ComuniService } from 'src/app/services/comuni.service';

@Component({
  selector: 'app-visualizza-storico',
  templateUrl: './visualizza-storico.component.html',
  styleUrls: ['./visualizza-storico.component.scss'],
})
export class VisualizzaStoricoComponent implements OnInit {
  comuneSelezionato: string;
  comuni: SelectItem[];
  storicoComune: Comune;
  frozenCols: any[];

  annoSelezionato: string;
  anni: SelectItem[];

  sessoSelezionato: string;
  sessi: SelectItem[];

  constructor(private comuniService: ComuniService) {
    this.comuni = [];
    this.storicoComune = new Comune();
    this.storicoComune.dati = [];
    this.anni = [];
    this.sessi = [];
  }

  ngOnInit(): void {
    // COMUNI
    this.comuniService.caricaListaComuni().then((data) => {
      let response: any = data;

      for (let i = 0; i < response.listaComuni.length; i++) {
        let comuneTemp: Comune = response.listaComuni[i];
        this.comuni.push({
          value: comuneTemp.codice,
          label: comuneTemp.denominazione,
        });
      }
    });

    this.frozenCols = [{ field: 'comune.anno', header: 'ANNO' }];

    // ANNI
    this.anni.push({ label: 'Nessun filtro', value: '' });
    for (let i = 1982; i < 2021; i++) {
      this.anni.push({ label: i + '', value: i + '' });
    }

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
          if (
            this.annoSelezionato === undefined ||
            this.annoSelezionato === ''
          ) {
            this.storicoComune.dati.push(storicoComuneTemp.dati[i]);
          }
          if (
            storicoComuneTemp.dati[i].anno.toString() == this.annoSelezionato &&
            storicoComuneTemp.dati[i].tipo == this.sessoSelezionato
          ) {
            this.storicoComune.dati.push(storicoComuneTemp.dati[i]);
          }
        }
      });
  }
}
