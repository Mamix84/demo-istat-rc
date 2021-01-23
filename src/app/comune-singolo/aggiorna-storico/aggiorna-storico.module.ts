import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AggiornaStoricoComponent } from './aggiorna-storico/aggiorna-storico.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [AggiornaStoricoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [AggiornaStoricoComponent]
})
export class AggiornaStoricoModule { }
