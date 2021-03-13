import { Component, OnInit } from '@angular/core';
import { Indicatori } from 'src/app/enum/indicatori.enum';
import { Sessi } from 'src/app/enum/sessi.enum';
import { Comune } from 'src/app/model/comune';
import { ComuneService } from 'src/app/services/comune.service';

@Component({
  selector: 'app-statistiche-popolazione-multipli',
  templateUrl: './statistiche-popolazione-multipli.component.html',
  styleUrls: ['./statistiche-popolazione-multipli.component.scss'],
})
export class StatistichePopolazioneMultipliComponent implements OnInit {
  comuniSelezionati: string[];
  comuniM: Comune[];
  comuniF: Comune[];
  comuniT: Comune[];

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI MULTIPLI' },
    { label: 'CONFRONTO STATISTICHE' },
  ];

  constructor(private comuneService: ComuneService) {
    this.comuniSelezionati = [];
    this.comuniM = [];
    this.comuniF = [];
    this.comuniT = [];
  }

  ngOnInit(): void {}

  caricaDatiComune() {
    let listaComuniTemp: Comune[];
    listaComuniTemp = [];
    let listaComuniTempM: Comune[];
    listaComuniTempM = [];
    let listaComuniTempF: Comune[];
    listaComuniTempF = [];
    this.comuniM = [];
    this.comuniF = [];
    this.comuniT = [];
    for (let i = 0; i < this.comuniSelezionati.length; i++) {
      this.comuneService
        .caricaDati(this.comuniSelezionati[i], Indicatori.POPOLAZIONE)
        .then((data) => {
          let response: any = data;
          let storicoComuneTemp: Comune = response;

          listaComuniTempM.push(this.comuneService.filtroSesso(
            storicoComuneTemp,
            [Sessi.MASCHI]
          ));

          listaComuniTempF.push(this.comuneService.filtroSesso(
            storicoComuneTemp,
            [Sessi.FEMMINE]
          ));

          listaComuniTemp.push(this.comuneService.filtroSesso(
            storicoComuneTemp,
            [Sessi.TOTALE]
          ));

          if (i === this.comuniSelezionati.length - 1) {
            this.comuniM = listaComuniTempM;
            this.comuniF = listaComuniTempF;
            this.comuniT = listaComuniTemp;
          }
        });
    }
  }

  comuniSelezionatiEvent(event: any) {
    this.comuniSelezionati = event;

    this.caricaDatiComune();
  }
}
