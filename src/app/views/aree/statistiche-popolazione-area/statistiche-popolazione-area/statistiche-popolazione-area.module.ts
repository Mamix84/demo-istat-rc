import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatistichePopolazioneAreaComponent } from './statistiche-popolazione-area/statistiche-popolazione-area.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [StatistichePopolazioneAreaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    SharedModule,
    WidgetModule
  ]
})
export class StatistichePopolazioneAreaModule { }
