import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizzaStoricoModule } from './visualizza-storico/visualizza-storico.module';
import { AggiornaStoricoModule } from './aggiorna-storico/aggiorna-storico.module';
import { EtaScolareModule } from './eta-scolare/eta-scolare.module';
import { GraficiModule } from './grafici/grafici.module';
import { StatisticheModule } from './statistiche/statistiche.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VisualizzaStoricoModule,
    AggiornaStoricoModule,
    EtaScolareModule,
    GraficiModule,
    StatisticheModule,
  ],
})
export class ComuneSingoloModule {}
