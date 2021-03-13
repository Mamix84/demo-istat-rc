import { Component, OnInit } from '@angular/core';
import { Indicatori } from 'src/app/enum/indicatori.enum';
import { Sessi } from 'src/app/enum/sessi.enum';
import { Comune } from 'src/app/model/comune';
import { ComuneService } from 'src/app/services/comune.service';

@Component({
  selector: 'app-andamento-demografico-comune-singolo',
  templateUrl: './andamento-demografico-comune-singolo.component.html',
  styleUrls: ['./andamento-demografico-comune-singolo.component.scss'],
})
export class AndamentoDemograficoComuneSingoloComponent implements OnInit {
  comuneSelezionato: string;
  comune: Comune;
  indicatoreSelezionato: string;

  maschi: number = 0;
  femmine: number = 0;
  totale: number = 0;

  maschiFilter: Comune;
  femmineFilter: Comune;
  totaleFilter: Comune;

  menuItem = [
    { label: 'BILANCIO DEMOGRAFICO - COMUNI SINGOLI' },
    { label: 'ANDAMENTO DEMORGAFICO' },
  ];

  constructor(private comuneService: ComuneService) {}

  ngOnInit(): void {}

  caricaAndamentoDemografico() {
    if (
      this.comuneSelezionato != undefined &&
      this.indicatoreSelezionato != undefined
    ) {
      this.comuneService
        .caricaDati(this.comuneSelezionato, this.indicatoreSelezionato)
        .then((data) => {
          let response: any = data;
          let storicoComuneTemp: Comune = response;

          this.comune = storicoComuneTemp;

          this.maschi = this.comuneService.recuperaDatoUltimoAnno(
            this.comune,
            Sessi.MASCHI
          );
          this.femmine = this.comuneService.recuperaDatoUltimoAnno(
            this.comune,
            Sessi.FEMMINE
          );
          this.totale = this.comuneService.recuperaDatoUltimoAnno(
            this.comune,
            Sessi.TOTALE
          );

          this.maschiFilter = this.comuneService.filtroSesso(this.comune, [
            Sessi.MASCHI,
          ]);
          this.femmineFilter = this.comuneService.filtroSesso(this.comune, [
            Sessi.FEMMINE,
          ]);
          this.totaleFilter = this.comuneService.filtroSesso(this.comune, [
            Sessi.TOTALE,
          ]);
        });
    }
  }

  comuneSelezionatoEvent(event: string) {
    this.comuneSelezionato = event;

    this.caricaAndamentoDemografico();
  }

  indicatoreSelezionatoEvent(event: string) {
    this.indicatoreSelezionato = event;

    this.caricaAndamentoDemografico();
  }
}
