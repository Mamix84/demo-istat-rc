import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { Panel, PanelModule } from 'primeng/panel';
import { Table, TableModule } from 'primeng/table';
import { DropdownServiceComponent } from './dropdown-service/dropdown-service.component';
import { MultiSelect, MultiSelectModule } from 'primeng/multiselect';
import { MultiselectServiceComponent } from './multiselect-service/multiselect-service.component';
import { SingleLineChartComponent } from './single-line-chart/single-line-chart.component';
import { ChartModule } from 'primeng/chart';
import { Toast, ToastModule } from 'primeng/toast';
import { Knob, KnobModule } from 'primeng/knob';
import { GMap, GMapModule} from 'primeng/gmap';
import { MultiLineChartComponent } from './multi-line-chart/multi-line-chart.component';

@NgModule({
  declarations: [
    DropdownServiceComponent,
    MultiselectServiceComponent,
    SingleLineChartComponent,
    MultiLineChartComponent,
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
  ],
  exports: [
    Dropdown,
    Panel,
    Table,
    MultiSelect,
    Toast,
    Knob,
    GMap,
    DropdownServiceComponent,
    MultiselectServiceComponent,
    SingleLineChartComponent,
    MultiLineChartComponent
  ],
})
export class WidgetModule {}
