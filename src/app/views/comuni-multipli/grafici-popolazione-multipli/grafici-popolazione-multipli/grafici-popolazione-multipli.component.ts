import { Component, OnInit } from '@angular/core';
import { Indicatori } from 'src/app/enum/indicatori.enum';
import { Comune } from 'src/app/model/comune';
import { ComuneService } from 'src/app/services/comune.service';

@Component({
  selector: 'app-grafici-popolazione-multipli',
  templateUrl: './grafici-popolazione-multipli.component.html',
  styleUrls: ['./grafici-popolazione-multipli.component.scss'],
})
export class GraficiPopolazioneMultipliComponent implements OnInit {
  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI MULTIPLI' },
    { label: 'CONFRONTO GRAFICI POPOLAZIONE' },
  ];
  sessoSelezionato: string;
  comuniSelezionati: string[];
  comuni: Comune[];

  constructor(private comuneService: ComuneService) {
    this.comuniSelezionati = [];
    this.comuni = [];
  }

  ngOnInit(): void {}

  caricaDatiComune() {
    let listaComuniTemp: Comune[];
    listaComuniTemp = [];
    this.comuni = [];
    for (let i = 0; i < this.comuniSelezionati.length; i++) {
      this.comuneService
        .caricaDati(this.comuniSelezionati[i], Indicatori.POPOLAZIONE)
        .then((data) => {
          let response: any = data;
          let storicoComuneTemp: Comune = response;

          listaComuniTemp.push(
            this.comuneService.filtroSesso(storicoComuneTemp, [
              this.sessoSelezionato,
            ])
          );

          if (i === this.comuniSelezionati.length - 1) {
            this.comuni = listaComuniTemp;
          }
        });
    }
  }

  sessoSelezionatoEvent(event: any) {
    this.sessoSelezionato = event;

    this.caricaDatiComune();
  }

  comuniSelezionatiEvent(event: any) {
    this.comuniSelezionati = event;

    if (this.sessoSelezionato != undefined) {
      this.caricaDatiComune();
    }
  }
}
