import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreeModule } from './aree/aree.module';
import { ComuneSingoloModule } from './comune-singolo/comune-singolo.module';
import { ComuniMultipliModule } from './comuni-multipli/comuni-multipli.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AreeModule,
    ComuneSingoloModule,
    ComuniMultipliModule,
    HomeModule,
  ],
})
export class ViewsModule {}
