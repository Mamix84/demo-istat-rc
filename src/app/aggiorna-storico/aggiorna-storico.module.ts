import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AggiornaStoricoComponent } from './aggiorna-storico/aggiorna-storico.component';



@NgModule({
  declarations: [AggiornaStoricoComponent],
  imports: [
    CommonModule
  ],
  exports: [AggiornaStoricoComponent]
})
export class AggiornaStoricoModule { }
