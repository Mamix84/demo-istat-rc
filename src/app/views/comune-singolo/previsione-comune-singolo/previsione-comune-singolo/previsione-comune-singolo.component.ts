import { Component, OnInit } from '@angular/core';
import { Indicatori } from 'src/app/enum/indicatori.enum';
import { Comune } from 'src/app/model/comune';
import { ComuneService } from 'src/app/services/comune.service';
import { StatisticheService } from 'src/app/services/statistiche.service';

@Component({
  selector: 'app-previsione-comune-singolo',
  templateUrl: './previsione-comune-singolo.component.html',
  styleUrls: ['./previsione-comune-singolo.component.scss'],
})
export class PrevisioneComuneSingoloComponent implements OnInit {
  comuneSelezionato: string;
  comune: Comune;

  pop5AnniPrev: Comune;
  pop10AnniPrev: Comune;
  pop15AnniPrev: Comune;
  pop20AnniPrev: Comune;

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI SINGOLI' },
    { label: 'PREVISIONE' },
  ];

  constructor(
    private comuneService: ComuneService,
    private statisticheService: StatisticheService
  ) {}

  ngOnInit(): void {}

  caricaStoricoComune() {
    this.comuneService
      .caricaDati(this.comuneSelezionato, Indicatori.POPOLAZIONE)
      .then((data) => {
        let response: any = data;
        let storicoComuneTemp: Comune = response;

        this.comune = storicoComuneTemp;

        this.pop5AnniPrev = this.statisticheService.calcolaPrevisione(
          this.comune,
          5
        );
        this.pop10AnniPrev = this.statisticheService.calcolaPrevisione(
          this.comune,
          10
        );
        this.pop15AnniPrev = this.statisticheService.calcolaPrevisione(
          this.comune,
          15
        );
        this.pop20AnniPrev = this.statisticheService.calcolaPrevisione(
          this.comune,
          20
        );
      });
  }

  comuneSelezionatoEvent(comune: string) {
    this.comuneSelezionato = comune;

    this.caricaStoricoComune();
  }
}
