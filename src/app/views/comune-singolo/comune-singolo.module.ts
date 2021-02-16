import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizzaStoricoModule } from './visualizza-storico/visualizza-storico.module';
import { EtaScolareModule } from './eta-scolare/eta-scolare.module';
import { GraficiModule } from './grafici/grafici.module';
import { StatisticheModule } from './statistiche/statistiche.module';
import { PrevisioneComuneSingoloModule } from './previsione-comune-singolo/previsione-comune-singolo.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VisualizzaStoricoModule,
    EtaScolareModule,
    GraficiModule,
    StatisticheModule,
    PrevisioneComuneSingoloModule,
  ],
})
export class ComuneSingoloModule {}
