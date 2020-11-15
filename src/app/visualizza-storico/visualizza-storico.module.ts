import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizzaStoricoComponent } from './visualizza-storico/visualizza-storico.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VisualizzaStoricoComponent],
  imports: [CommonModule, FormsModule, DropdownModule],
  exports: [VisualizzaStoricoComponent],
})
export class VisualizzaStoricoModule {}
