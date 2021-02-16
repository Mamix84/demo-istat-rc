import { Component, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ComuniService } from 'src/app/domini-services/comuni.service';
import { Comune } from 'src/app/model/comune';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.scss'],
})
export class StatisticheComponent implements OnInit {
  comuneSelezionato: string;

  @Output() storicoComune: Comune;

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI SINGOLI' },
    { label: 'STATISTICHE' },
  ];

  constructor(private comuniService: ComuniService) {

    this.storicoComune = new Comune();
    this.storicoComune.dati = [];
  }

  ngOnInit(): void {
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

  comuneSelezionatoEvent(comune: string) {
    this.comuneSelezionato = comune;

    this.caricaStoricoComune();
  }

}
