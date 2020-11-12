import { Component, OnInit } from '@angular/core';
import { Comune } from 'src/app/model/comune';

@Component({
  selector: 'app-visualizza-storico',
  templateUrl: './visualizza-storico.component.html',
  styleUrls: ['./visualizza-storico.component.scss']
})
export class VisualizzaStoricoComponent implements OnInit {

  comuneSelezionato: Comune;
  comuni = [];

  constructor() { }

  ngOnInit(): void {
  }

}
