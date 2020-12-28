import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfrontaComuniComponent } from './confronta-comuni/confronta-comuni.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ConfrontaComuniComponent],
  imports: [
    CommonModule,
    ChartModule,
    DropdownModule,
    FormsModule,
    PanelModule,
    ToastModule,
    MultiSelectModule,
  ],
  exports: [ConfrontaComuniComponent],
})
export class ConfrontaComuniModule {}
