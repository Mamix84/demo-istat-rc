import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ComuneSingoloModule } from './comune-singolo/comune-singolo.module';
import { ComuniMultipliModule } from './comuni-multipli/comuni-multipli.module';
import { AreeModule } from './aree/aree.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ComuneSingoloModule,
    ComuniMultipliModule,
    AreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
