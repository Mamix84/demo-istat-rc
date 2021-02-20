import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { ComuniService } from 'src/app/domini-services/comuni.service';
import { Indicatori } from 'src/app/enum/indicatori.enum';
import { Comune } from 'src/app/model/comune';
import { ComuneService } from 'src/app/services/comune.service';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.scss'],
  providers: [MessageService],
})
export class GraficiComponent implements OnInit {
  comuneSelezionato: string;
  sessiSelezionati: string[];

  comune: Comune;
  comuneFiltered: Comune;

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI SINGOLI' },
    { label: 'GRAFICI POPOLAZIONE' },
  ];

  constructor(
    private comuniService: ComuniService,
    private messageService: MessageService,
    private comuneService: ComuneService
  ) {
    this.sessiSelezionati = [];
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

    this.caricaDatiComune();
  }

  sessiSelezionatiEvent(sessi: string[]) {
    this.sessiSelezionati = sessi;

    this.comuneFiltered = this.comuneService.filtroSesso(
      this.comune,
      this.sessiSelezionati
    );
  }
}
