import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizzaStoricoComponent } from './visualizza-storico/visualizza-storico.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [VisualizzaStoricoComponent],
  imports: [CommonModule, FormsModule, DropdownModule, TableModule, ScrollPanelModule, PanelModule],
  exports: [VisualizzaStoricoComponent],
})
export class VisualizzaStoricoModule {}
