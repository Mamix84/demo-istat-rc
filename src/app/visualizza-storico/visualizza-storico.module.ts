import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizzaStoricoComponent } from './visualizza-storico/visualizza-storico.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [VisualizzaStoricoComponent],
  imports: [CommonModule, DropdownModule],
  exports: [VisualizzaStoricoComponent],
})
export class VisualizzaStoricoModule {}
