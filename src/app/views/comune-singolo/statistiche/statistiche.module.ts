import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticheComponent } from './statistiche/statistiche.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [StatisticheComponent],
  imports: [CommonModule, FormsModule, SharedModule, WidgetModule],
  exports: [StatisticheComponent],
})
export class StatisticheModule {}
