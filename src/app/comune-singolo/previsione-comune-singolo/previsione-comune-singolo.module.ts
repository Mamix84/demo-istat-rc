import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevisioneComuneSingoloComponent } from './previsione-comune-singolo/previsione-comune-singolo.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PrevisioneComuneSingoloComponent],
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
  exports: [PrevisioneComuneSingoloComponent],
})
export class PrevisioneComuneSingoloModule {}
