import { Component, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ComuniService } from 'src/app/domini-services/comuni.service';
import { Comune } from 'src/app/model/comune';

@Component({
  selector: 'app-eta-scolare',
  templateUrl: './eta-scolare.component.html',
  styleUrls: ['./eta-scolare.component.scss'],
})
export class EtaScolareComponent implements OnInit {
  comuneSelezionato: string;
  comuni: SelectItem[];
  @Output() storicoComune: Comune;

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI SINGOLI' },
    { label: 'POPOLAZIONE ETA\' SCOLARE' },
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
