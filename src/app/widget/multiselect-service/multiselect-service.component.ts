import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Dominio } from 'src/app/model/dominio';
import { DominiService } from '../services/domini.service';

@Component({
  selector: 'app-multiselect-service',
  templateUrl: './multiselect-service.component.html',
  styleUrls: ['./multiselect-service.component.scss'],
})
export class MultiselectServiceComponent implements OnInit {
  listaItem: any[];
  @Input() itemsSelezionati: string[];

  @Input() label: string;
  @Input() placeholder: string;
  @Input() disabled: boolean = false;
  @Input() filter: boolean = false;
  @Output() itemSelezionatiEvent = new EventEmitter<string[]>();

  constructor(private dominiService: DominiService) {
    this.listaItem = [];
  }

  ngOnInit(): void {
    this.dominiService.caricaListaDominio(this.label).then((data) => {
      let response: any = data;
      for (let i = 0; i < response.listaDominio.length; i++) {
        let dominioTemp: Dominio = response.listaDominio[i];
        this.listaItem.push({
          value: dominioTemp.codice,
          label: dominioTemp.denominazione.toUpperCase(),
        });
      }
    });
  }

  onChangeEvent() {
    this.itemSelezionatiEvent.emit(this.itemsSelezionati);
  }
}
