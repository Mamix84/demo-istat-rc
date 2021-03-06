import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtaScolarePopolazioneMultipliModule } from './eta-scolare-popolazione-multipli/eta-scolare-popolazione-multipli.module';
import { GraficiPopolazioneMultipliModule } from './grafici-popolazione-multipli/grafici-popolazione-multipli.module';
import { StatistichePopolazioneMultipliModule } from './statistiche-popolazione-multipli/statistiche-popolazione-multipli.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EtaScolarePopolazioneMultipliModule,
    GraficiPopolazioneMultipliModule,
    StatistichePopolazioneMultipliModule,
  ],
})
export class ComuniMultipliModule {}
