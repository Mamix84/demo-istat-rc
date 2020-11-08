import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticheComponent } from './statistiche/statistiche.component';



@NgModule({
  declarations: [StatisticheComponent],
  imports: [
    CommonModule
  ],
  exports: [StatisticheComponent]
})
export class StatisticheModule { }
