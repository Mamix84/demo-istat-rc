import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aggiorna-storico',
  templateUrl: './aggiorna-storico.component.html',
  styleUrls: ['./aggiorna-storico.component.scss']
})
export class AggiornaStoricoComponent implements OnInit {

  menuItem = [
    { label: 'STATISTICHE POPOLAZIONE - COMUNI SINGOLI' },
    { label: 'AGGIORNA STORICO' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
