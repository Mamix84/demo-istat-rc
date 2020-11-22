import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficiComponent } from './grafici/grafici.component';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [GraficiComponent],
  imports: [
    CommonModule,
    ChartModule,
    DropdownModule,
    FormsModule,
    PanelModule,
    ToastModule,
    MultiSelectModule,
  ],
  exports: [GraficiComponent],
})
export class GraficiModule {}
