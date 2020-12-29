import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticheComponent } from './statistiche/statistiche.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { IndiceFertilitaComponent } from './indice-fertilita/indice-fertilita.component';
import { TassoNatalitaComponent } from './tasso-natalita/tasso-natalita.component';

@NgModule({
  declarations: [
    StatisticheComponent,
    IndiceFertilitaComponent,
    TassoNatalitaComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    PanelModule,
    MultiSelectModule,
    ChartModule,
    ToastModule,
  ],
  exports: [
    StatisticheComponent,
    IndiceFertilitaComponent,
    TassoNatalitaComponent,
  ],
})
export class StatisticheModule {}
