import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { Panel, PanelModule } from 'primeng/panel';
import { Table, TableModule } from 'primeng/table';
import { DropdownServiceComponent } from './dropdown-service/dropdown-service.component';
import { MultiSelect, MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [DropdownServiceComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    PanelModule,
    TableModule,
    MultiSelectModule
  ],
  exports: [Dropdown, Panel, Table, MultiSelect, DropdownServiceComponent],
})
export class WidgetModule {}
