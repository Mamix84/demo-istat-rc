import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatistichePopolazioneMultipliComponent } from './statistiche-popolazione-multipli/statistiche-popolazione-multipli.component';
import { FormsModule } from '@angular/forms';

import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StatistichePopolazioneMultipliComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    PanelModule,
    MultiSelectModule,
    ChartModule,
    ToastModule,
    SharedModule,
  ],
  exports: [StatistichePopolazioneMultipliComponent],
})
export class StatistichePopolazioneMultipliModule {}
