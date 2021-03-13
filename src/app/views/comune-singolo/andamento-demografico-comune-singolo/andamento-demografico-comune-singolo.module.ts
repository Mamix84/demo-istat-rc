import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AndamentoDemograficoComuneSingoloComponent } from './andamento-demografico-comune-singolo/andamento-demografico-comune-singolo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [AndamentoDemograficoComuneSingoloComponent],
  imports: [CommonModule, FormsModule, SharedModule, WidgetModule],
})
export class AndamentoDemograficoComuneSingoloModule {}
