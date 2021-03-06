import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficiPopolazioneMultipliComponent } from './grafici-popolazione-multipli/grafici-popolazione-multipli.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [GraficiPopolazioneMultipliComponent],
  imports: [CommonModule, FormsModule, SharedModule, WidgetModule],
  exports: [GraficiPopolazioneMultipliComponent],
})
export class GraficiPopolazioneMultipliModule {}
