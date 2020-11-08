import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizzaStoricoComponent } from './visualizza-storico/visualizza-storico.component';



@NgModule({
  declarations: [VisualizzaStoricoComponent],
  imports: [
    CommonModule
  ],
  exports: [VisualizzaStoricoComponent]
})
export class VisualizzaStoricoModule { }
