import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficiPopolazioneAreaComponent } from './grafici-popolazione-area/grafici-popolazione-area.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GraficiPopolazioneAreaComponent],
  imports: [
    CommonModule,
    ChartModule,
    DropdownModule,
    FormsModule,
    PanelModule,
    ToastModule,
    MultiSelectModule,
    SharedModule,
  ],
})
export class GraficiPopolazioneAreaModule {}
