import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatistichePopolazioneMultipliComponent } from './statistiche-popolazione-multipli/statistiche-popolazione-multipli.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [StatistichePopolazioneMultipliComponent],
  imports: [CommonModule, FormsModule, SharedModule, WidgetModule],
  exports: [StatistichePopolazioneMultipliComponent],
})
export class StatistichePopolazioneMultipliModule {}
