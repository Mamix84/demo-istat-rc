import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Dominio } from 'src/app/model/dominio';
import { DominiService } from './services/domini.service';

@Component({
  selector: 'app-dropdown-service',
  templateUrl: './dropdown-service.component.html',
  styleUrls: ['./dropdown-service.component.scss']
})
export class DropdownServiceComponent implements OnInit {

  listaItem: any[];
  itemSelezionato: string;

  @Input() label: string;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Output() itemSelezionatoEvent = new EventEmitter<string>();

  constructor(private dominiService: DominiService) {
    this.listaItem = [];
  }

  ngOnInit(): void {
    this.dominiService.caricaListaDominio(this.label).then((data) => {
      let response: any = data;
      this.listaItem.push({ label: 'NESSUN FILTRO', value: undefined });
      for (let i = 0; i < response.listaDominio.length; i++) {
        let dominioTemp: Dominio = response.listaDominio[i];
        this.listaItem.push({
          value: dominioTemp.codice,
          label: dominioTemp.denominazione.toUpperCase(),
        });
      }
    });
  }

  onChangeEvent(){
    this.itemSelezionatoEvent.emit(this.itemSelezionato);
  }

}
