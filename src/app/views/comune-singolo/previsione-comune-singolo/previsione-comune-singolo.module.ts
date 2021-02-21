import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevisioneComuneSingoloComponent } from './previsione-comune-singolo/previsione-comune-singolo.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [PrevisioneComuneSingoloComponent],
  imports: [CommonModule, FormsModule, SharedModule, WidgetModule],
  exports: [PrevisioneComuneSingoloComponent],
})
export class PrevisioneComuneSingoloModule {}
