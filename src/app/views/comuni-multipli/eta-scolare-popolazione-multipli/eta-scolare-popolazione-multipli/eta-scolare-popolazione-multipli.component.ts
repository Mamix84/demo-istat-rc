import { AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ComuniService } from 'src/app/domini-services/comuni.service';
import { Comune } from 'src/app/model/comune';


@Component({
  selector: 'app-eta-scolare-popolazione-multipli',
  templateUrl: './eta-scolare-popolazione-multipli.component.html',
  styleUrls: ['./eta-scolare-popolazione-multipli.component.scss'],
})
export class EtaScolarePopolazioneMultipliComponent implements OnInit {
  comuniSelezionati: string;
  comuni: SelectItem[];
  @Output() storicoComuni: Comune[];

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI MULTIPLI' },
    { label: "CONFRONTO ETA' SCOLARE" },
  ];

  constructor(private comuniService: ComuniService) {
    this.comuni = [];
    this.storicoComuni = [];
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
    this.storicoComuni = [];

    for (let i = 0; i < this.comuniSelezionati.length; i++) {
      let listaStoricoComuniTemp = [];
      this.comuniService
        .caricaStoricoComune(this.comuniSelezionati[i])
        .then((data) => {
          let response: any = data;
          let storicoComuneTemp: Comune = response;

          let storicoComune = new Comune();
          storicoComune.dati = [];
          storicoComune.denominazione = storicoComuneTemp.denominazione;

          for (let i = 0; i < storicoComuneTemp.dati.length; i++) {
            storicoComune.dati.push(storicoComuneTemp.dati[i]);
          }

          this.storicoComuni = this.storicoComuni.concat(storicoComune);
        });
    }
  }
}
