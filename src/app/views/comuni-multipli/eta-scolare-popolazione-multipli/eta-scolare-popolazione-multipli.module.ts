import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtaScolarePopolazioneMultipliComponent } from './eta-scolare-popolazione-multipli/eta-scolare-popolazione-multipli.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [EtaScolarePopolazioneMultipliComponent],
  imports: [CommonModule, FormsModule, SharedModule, WidgetModule],
  exports: [EtaScolarePopolazioneMultipliComponent],
})
export class EtaScolarePopolazioneMultipliModule {}
