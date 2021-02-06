import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficiPopolazioneAreaComponent } from './aree/grafici-popolazione-area/grafici-popolazione-area/grafici-popolazione-area.component';
import { AggiornaStoricoComponent } from './comune-singolo/aggiorna-storico/aggiorna-storico/aggiorna-storico.component';
import { EtaScolareComponent } from './comune-singolo/eta-scolare/eta-scolare/eta-scolare.component';
import { GraficiComponent } from './comune-singolo/grafici/grafici/grafici.component';
import { PrevisioneComuneSingoloComponent } from './comune-singolo/previsione-comune-singolo/previsione-comune-singolo/previsione-comune-singolo.component';
import { StatisticheComponent } from './comune-singolo/statistiche/statistiche/statistiche.component';
import { VisualizzaStoricoComponent } from './comune-singolo/visualizza-storico/visualizza-storico/visualizza-storico.component';
import { ConfrontaComuniComponent } from './comuni-multipli/confronta-comuni/confronta-comuni/confronta-comuni.component';
import { EtaScolarePopolazioneMultipliComponent } from './comuni-multipli/eta-scolare-popolazione-multipli/eta-scolare-popolazione-multipli/eta-scolare-popolazione-multipli.component';
import { StatistichePopolazioneMultipliComponent } from './comuni-multipli/statistiche-popolazione-multipli/statistiche-popolazione-multipli/statistiche-popolazione-multipli.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: 'visualizza-storico', component: VisualizzaStoricoComponent },
  { path: 'aggiorna-storico', component: AggiornaStoricoComponent },
  { path: 'grafici', component: GraficiComponent },
  { path: 'statistiche', component: StatisticheComponent },
  { path: 'confronta-comuni', component: ConfrontaComuniComponent },
  { path: 'eta-scolare', component: EtaScolareComponent },
  {
    path: 'eta-scolare-popolazione-multipli',
    component: EtaScolarePopolazioneMultipliComponent,
  },
  {
    path: 'statistiche-popolazione-multipli',
    component: StatistichePopolazioneMultipliComponent,
  },
  { path: '', component: HomeComponent },
  {
    path: 'previsione-popolazione-singolo',
    component: PrevisioneComuneSingoloComponent,
  },
  {
    path: 'grafici-popolazione-area',
    component: GraficiPopolazioneAreaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
