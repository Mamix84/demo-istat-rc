import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizzaStoricoComponent } from './visualizza-storico/visualizza-storico.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [VisualizzaStoricoComponent],
  imports: [CommonModule, FormsModule, DropdownModule, TableModule],
  exports: [VisualizzaStoricoComponent],
})
export class VisualizzaStoricoModule {}
