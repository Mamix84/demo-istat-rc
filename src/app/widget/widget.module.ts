import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DropdownServiceComponent } from './dropdown-service/dropdown-service.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiselectServiceComponent } from './multiselect-service/multiselect-service.component';
import { SingleLineChartComponent } from './single-line-chart/single-line-chart.component';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { KnobModule } from 'primeng/knob';
import { GMap, GMapModule } from 'primeng/gmap';
import { MultiLineChartComponent } from './multi-line-chart/multi-line-chart.component';
import { SingleBarChartComponent } from './single-bar-chart/single-bar-chart.component';
import { SliderModule } from 'primeng/slider';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    DropdownServiceComponent,
    MultiselectServiceComponent,
    SingleLineChartComponent,
    MultiLineChartComponent,
    SingleBarChartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    PanelModule,
    TableModule,
    MultiSelectModule,
    ChartModule,
    ToastModule,
    KnobModule,
    GMapModule,
    SliderModule,
    ScrollPanelModule
  ],
  exports: [
    DropdownModule,
    PanelModule,
    MultiSelectModule,
    ToastModule,
    KnobModule,
    GMap,
    DropdownServiceComponent,
    MultiselectServiceComponent,
    SingleLineChartComponent,
    MultiLineChartComponent,
    SingleBarChartComponent,
    SliderModule,
    ScrollPanelModule,
    TableModule
  ],
})
export class WidgetModule {}
