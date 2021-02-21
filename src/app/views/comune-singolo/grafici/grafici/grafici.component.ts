import { Component, OnInit } from '@angular/core';
import { Indicatori } from 'src/app/enum/indicatori.enum';
import { Comune } from 'src/app/model/comune';
import { ComuneService } from 'src/app/services/comune.service';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.scss'],
})
export class GraficiComponent implements OnInit {
  comuneSelezionato: string;
  sessiSelezionati: string[];

  comune: Comune;
  listaComuniFiltered: Comune[];

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI SINGOLI' },
    { label: 'GRAFICI POPOLAZIONE' },
  ];

  constructor(
    private comuneService: ComuneService
  ) {
    this.sessiSelezionati = [];
    this.listaComuniFiltered = [];
  }

  ngOnInit(): void {}

  caricaDatiComune() {
    this.comuneService
      .caricaDati(this.comuneSelezionato, Indicatori.POPOLAZIONE)
      .then((data) => {
        let response: any = data;
        let storicoComuneTemp: Comune = response;

        this.comune = storicoComuneTemp;
      });
  }

  comuneSelezionatoEvent(comune: string) {
    this.comuneSelezionato = comune;

    this.sessiSelezionati = [];

    this.caricaDatiComune();
  }

  sessiSelezionatiEvent(sessi: string[]) {
    this.sessiSelezionati = sessi;

    let listaComuniFilteredTemp = [];

    for (let i = 0; i < this.sessiSelezionati.length; i++) {
      listaComuniFilteredTemp.push(
        this.comuneService.filtroSesso(this.comune, [this.sessiSelezionati[i]])
      );
    }

    this.listaComuniFiltered = listaComuniFilteredTemp;
  }
}
