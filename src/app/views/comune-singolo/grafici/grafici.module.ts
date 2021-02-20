import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficiComponent } from './grafici/grafici.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [GraficiComponent],
  imports: [CommonModule, FormsModule, SharedModule, WidgetModule],
  exports: [GraficiComponent],
})
export class GraficiModule {}
