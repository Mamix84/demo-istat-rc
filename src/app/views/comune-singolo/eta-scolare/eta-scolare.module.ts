import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EtaScolareComponent } from './eta-scolare/eta-scolare.component';
import { SharedModule } from '../../../shared/shared.module';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [EtaScolareComponent],
  imports: [CommonModule, FormsModule, SharedModule, WidgetModule],
  exports: [EtaScolareComponent],
})
export class EtaScolareModule {}
