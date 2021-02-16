import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfrontaComuniComponent } from './confronta-comuni/confronta-comuni.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';

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
    SharedModule
  ],
  exports: [ConfrontaComuniComponent],
})
export class ConfrontaComuniModule {}
