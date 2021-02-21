import { Component, OnInit, Output } from '@angular/core';
import { Indicatori } from 'src/app/enum/indicatori.enum';
import { Sessi } from 'src/app/enum/sessi.enum';
import { Comune } from 'src/app/model/comune';
import { ComuneService } from 'src/app/services/comune.service';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.scss'],
})
export class StatisticheComponent implements OnInit {
  comuneSelezionato: string;
  maschi: number = 0;
  femmine: number = 0;
  totale: number = 0;

  @Output() storicoComune: Comune;
  comunePopMaschileFiltered: Comune;
  comunePopFemminileFiltered: Comune;
  comunePopTotaleFiltered: Comune;

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI SINGOLI' },
    { label: 'STATISTICHE' },
  ];

  constructor(private comuneService: ComuneService) {
    this.storicoComune = new Comune();
    this.storicoComune.dati = [];
  }

  ngOnInit(): void {}

  caricaStoricoComune() {
    this.comuneService
      .caricaDati(this.comuneSelezionato, Indicatori.POPOLAZIONE)
      .then((data) => {
        let response: any = data;
        let storicoComuneTemp: Comune = response;

        this.storicoComune = storicoComuneTemp;

        this.maschi = this.comuneService.recuperaDatoUltimoAnno(
          this.storicoComune,
          Sessi.MASCHI
        );
        this.femmine = this.comuneService.recuperaDatoUltimoAnno(
          this.storicoComune,
          Sessi.FEMMINE
        );
        this.totale = this.comuneService.recuperaDatoUltimoAnno(
          this.storicoComune,
          Sessi.TOTALE
        );

        this.comunePopMaschileFiltered = this.comuneService.filtroSesso(
          this.storicoComune,
          [Sessi.MASCHI]
        );
        this.comunePopFemminileFiltered = this.comuneService.filtroSesso(
          this.storicoComune,
          [Sessi.FEMMINE]
        );
        this.comunePopTotaleFiltered = this.comuneService.filtroSesso(
          this.storicoComune,
          [Sessi.TOTALE]
        );
      });
  }

  comuneSelezionatoEvent(comune: string) {
    this.comuneSelezionato = comune;

    this.caricaStoricoComune();
  }
}
