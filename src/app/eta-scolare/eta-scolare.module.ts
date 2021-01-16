import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { EtaScolareComponent } from './eta-scolare/eta-scolare.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EtaScolareComponent],
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
  exports: [EtaScolareComponent],
})
export class EtaScolareModule {}
