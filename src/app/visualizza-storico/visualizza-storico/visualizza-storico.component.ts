import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Comune } from 'src/app/model/comune';
import { ComuniService } from 'src/app/services/comuni.service';

@Component({
  selector: 'app-visualizza-storico',
  templateUrl: './visualizza-storico.component.html',
  styleUrls: ['./visualizza-storico.component.scss'],
})
export class VisualizzaStoricoComponent implements OnInit {
  comuneSelezionato: string;
  comuni: SelectItem[];

  constructor(private comuniService: ComuniService) {
    this.comuni = [];
  }

  ngOnInit(): void {
    this.comuniService.getCountries().then((data) => {
      let response: any = data;

      for (let i = 0; i < response.listaComuni.length; i++) {
        let comuneTemp: Comune = response.listaComuni[i];
        this.comuni.push({
          value: comuneTemp.codice,
          label: comuneTemp.denominazione
        });
      }
    });
  }
}
