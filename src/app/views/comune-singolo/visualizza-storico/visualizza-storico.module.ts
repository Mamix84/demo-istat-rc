import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizzaStoricoComponent } from './visualizza-storico/visualizza-storico.component';
import { FormsModule } from '@angular/forms';
import { WidgetModule } from 'src/app/widget/widget.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VisualizzaStoricoComponent],
  imports: [CommonModule, FormsModule, SharedModule, WidgetModule],
  exports: [VisualizzaStoricoComponent],
})
export class VisualizzaStoricoModule {}
