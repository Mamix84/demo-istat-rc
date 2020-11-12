import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VisualizzaStoricoModule } from './visualizza-storico/visualizza-storico.module';
import { AggiornaStoricoModule } from './aggiorna-storico/aggiorna-storico.module';
import { StatisticheModule } from './statistiche/statistiche.module';
import { GraficiModule } from './grafici/grafici.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    VisualizzaStoricoModule,
    AggiornaStoricoModule,
    StatisticheModule,
    GraficiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
