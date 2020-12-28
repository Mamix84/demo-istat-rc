import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggiornaStoricoComponent } from './aggiorna-storico/aggiorna-storico/aggiorna-storico.component';
import { ConfrontaComuniComponent } from './confronta-comuni/confronta-comuni/confronta-comuni.component';
import { GraficiComponent } from './grafici/grafici/grafici.component';
import { HomeComponent } from './home/home/home.component';
import { StatisticheComponent } from './statistiche/statistiche/statistiche.component';
import { VisualizzaStoricoComponent } from './visualizza-storico/visualizza-storico/visualizza-storico.component';

const routes: Routes = [
  { path: 'visualizza-storico', component: VisualizzaStoricoComponent },
  { path: 'aggiorna-storico', component: AggiornaStoricoComponent },
  { path: 'grafici', component: GraficiComponent },
  { path: 'statistiche', component: StatisticheComponent },
  { path: 'confronta-comuni', component: ConfrontaComuniComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
