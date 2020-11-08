import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficiComponent } from './grafici/grafici.component';



@NgModule({
  declarations: [GraficiComponent],
  imports: [
    CommonModule
  ],
  exports: [GraficiComponent]
})
export class GraficiModule { }
