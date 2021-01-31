import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Comune } from 'src/app/model/comune';
import { ComuniService } from 'src/app/services/comuni.service';

@Component({
  selector: 'app-previsione-comune-singolo',
  templateUrl: './previsione-comune-singolo.component.html',
  styleUrls: ['./previsione-comune-singolo.component.scss'],
})
export class PrevisioneComuneSingoloComponent implements OnInit {
  comuneSelezionato: string;
  comuni: SelectItem[];
  storicoComune: Comune;

  andamento: any;

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI SINGOLI' },
    { label: 'PREVISIONE' },
  ];

  constructor(private comuniService: ComuniService) {
    this.comuni = [];
    this.storicoComune = new Comune();
    this.storicoComune.dati = [];
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
  }

  caricaStoricoComune() {
    this.comuniService
      .caricaStoricoComune(this.comuneSelezionato)
      .then((data) => {
        let response: any = data;
        let storicoComuneTemp: Comune = response;

        this.storicoComune = storicoComuneTemp;
      });
  }
}
