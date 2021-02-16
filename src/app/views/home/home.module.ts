import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormsModule, ButtonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
