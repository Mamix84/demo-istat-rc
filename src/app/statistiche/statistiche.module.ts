import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticheComponent } from './statistiche/statistiche.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  declarations: [StatisticheComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    PanelModule,
    MultiSelectModule
  ],
  exports: [StatisticheComponent]
})
export class StatisticheModule { }
