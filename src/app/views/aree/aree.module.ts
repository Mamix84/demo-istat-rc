import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficiPopolazioneAreaModule } from './grafici-popolazione-area/grafici-popolazione-area.module';
import { StatistichePopolazioneAreaModule } from './statistiche-popolazione-area/statistiche-popolazione-area/statistiche-popolazione-area.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, GraficiPopolazioneAreaModule, StatistichePopolazioneAreaModule],
})
export class AreeModule {}
