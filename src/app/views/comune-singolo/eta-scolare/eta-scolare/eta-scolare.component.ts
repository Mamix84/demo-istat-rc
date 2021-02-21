import { Component, OnInit, Output } from '@angular/core';
import { Indicatori } from 'src/app/enum/indicatori.enum';
import { Sessi } from 'src/app/enum/sessi.enum';
import { Comune } from 'src/app/model/comune';
import { ComuneService } from 'src/app/services/comune.service';

@Component({
  selector: 'app-eta-scolare',
  templateUrl: './eta-scolare.component.html',
  styleUrls: ['./eta-scolare.component.scss'],
})
export class EtaScolareComponent implements OnInit {
  comuneSelezionato: string;
  @Output() comune: Comune;

  popNidoFiltered: Comune;
  popMaternaFiltered: Comune;
  popElementareFiltered: Comune;
  popMediaFiltered: Comune;
  popSuperioreFiltered: Comune;

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI SINGOLI' },
    { label: "POPOLAZIONE ETA' SCOLARE" },
  ];

  constructor(private comuneService: ComuneService) {
    this.comune = new Comune();
    this.comune.dati = [];
  }

  ngOnInit(): void {}

  caricaStoricoComune() {
    this.comuneService
      .caricaDati(this.comuneSelezionato, Indicatori.POPOLAZIONE)
      .then((data) => {
        let response: any = data;
        let storicoComuneTemp: Comune = response;

        this.comune = storicoComuneTemp;

        this.popNidoFiltered = this.comuneService.filtroEta(
          this.comune,
          Sessi.TOTALE,
          0,
          3
        );

        this.popMaternaFiltered = this.comuneService.filtroEta(
          this.comune,
          Sessi.TOTALE,
          3,
          6
        );

        this.popElementareFiltered = this.comuneService.filtroEta(
          this.comune,
          Sessi.TOTALE,
          6,
          11
        );

        this.popMediaFiltered = this.comuneService.filtroEta(
          this.comune,
          Sessi.TOTALE,
          11,
          14
        );

        this.popSuperioreFiltered = this.comuneService.filtroEta(
          this.comune,
          Sessi.TOTALE,
          14,
          19
        );
      });
  }

  comuneSelezionatoEvent(comune: string) {
    this.comuneSelezionato = comune;

    this.caricaStoricoComune();
  }
}
