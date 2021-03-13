import { Component, OnInit } from '@angular/core';
import { Indicatori } from 'src/app/enum/indicatori.enum';
import { Sessi } from 'src/app/enum/sessi.enum';
import { Comune } from 'src/app/model/comune';
import { ComuneService } from 'src/app/services/comune.service';

@Component({
  selector: 'app-eta-scolare-popolazione-multipli',
  templateUrl: './eta-scolare-popolazione-multipli.component.html',
  styleUrls: ['./eta-scolare-popolazione-multipli.component.scss'],
})
export class EtaScolarePopolazioneMultipliComponent implements OnInit {
  comuniSelezionati: string[];
  comuniNido: Comune[];
  comuniMaterna: Comune[];
  comuniElementare: Comune[];
  comuniMedia: Comune[];
  comuniSuperiore: Comune[];

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI MULTIPLI' },
    { label: "CONFRONTO ETA' SCOLARE" },
  ];

  constructor(private comuneService: ComuneService) {
    this.comuniSelezionati = [];
    this.comuniNido = [];
    this.comuniMaterna = [];
    this.comuniElementare = [];
    this.comuniMedia = [];
    this.comuniSuperiore = [];
  }

  ngOnInit(): void {}

  caricaDatiComune() {
    let nido: Comune[];
    nido = [];
    let materna: Comune[];
    materna = [];
    let elementare: Comune[];
    elementare = [];
    let media: Comune[];
    media = [];
    let superiore: Comune[];
    superiore = [];
    this.comuniNido = [];
    this.comuniMaterna = [];
    this.comuniElementare = [];
    this.comuniMedia = [];
    this.comuniSuperiore = [];

    for (let i = 0; i < this.comuniSelezionati.length; i++) {
      this.comuneService
        .caricaDati(this.comuniSelezionati[i], Indicatori.POPOLAZIONE)
        .then((data) => {
          let response: any = data;
          let storicoComuneTemp: Comune = response;

          nido.push(
            this.comuneService.filtroEta(storicoComuneTemp, Sessi.TOTALE, 0, 3)
          );

          materna.push(
            this.comuneService.filtroEta(storicoComuneTemp, Sessi.TOTALE, 3, 6)
          );

          elementare.push(
            this.comuneService.filtroEta(storicoComuneTemp, Sessi.TOTALE, 6, 11)
          );

          media.push(
            this.comuneService.filtroEta(
              storicoComuneTemp,
              Sessi.TOTALE,
              11,
              14
            )
          );

          superiore.push(
            this.comuneService.filtroEta(
              storicoComuneTemp,
              Sessi.TOTALE,
              14,
              19
            )
          );

          if (i === this.comuniSelezionati.length - 1) {
            this.comuniNido = nido;
            this.comuniMaterna = materna;
            this.comuniElementare = elementare;
            this.comuniMedia = media;
            this.comuniSuperiore = superiore;
          }
        });
    }
  }
  comuniSelezionatiEvent(event: any) {
    this.comuniSelezionati = event;

    this.caricaDatiComune();
  }
}
