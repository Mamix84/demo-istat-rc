import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficiPopolazioneAreaComponent } from './grafici-popolazione-area/grafici-popolazione-area.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [GraficiPopolazioneAreaComponent],
  imports: [
    CommonModule,
    ChartModule,
    FormsModule,
    ToastModule,
    SharedModule,
    WidgetModule
  ],
})
export class GraficiPopolazioneAreaModule {}
