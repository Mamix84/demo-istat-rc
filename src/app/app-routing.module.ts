import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficiPopolazioneAreaComponent } from './views/aree/grafici-popolazione-area/grafici-popolazione-area/grafici-popolazione-area.component';
import { AndamentoDemograficoComuneSingoloComponent } from './views/comune-singolo/andamento-demografico-comune-singolo/andamento-demografico-comune-singolo/andamento-demografico-comune-singolo.component';
import { EtaScolareComponent } from './views/comune-singolo/eta-scolare/eta-scolare/eta-scolare.component';
import { GraficiComponent } from './views/comune-singolo/grafici/grafici/grafici.component';
import { PrevisioneComuneSingoloComponent } from './views/comune-singolo/previsione-comune-singolo/previsione-comune-singolo/previsione-comune-singolo.component';
import { StatisticheComponent } from './views/comune-singolo/statistiche/statistiche/statistiche.component';
import { VisualizzaStoricoComponent } from './views/comune-singolo/visualizza-storico/visualizza-storico/visualizza-storico.component';
import { EtaScolarePopolazioneMultipliComponent } from './views/comuni-multipli/eta-scolare-popolazione-multipli/eta-scolare-popolazione-multipli/eta-scolare-popolazione-multipli.component';
import { GraficiPopolazioneMultipliComponent } from './views/comuni-multipli/grafici-popolazione-multipli/grafici-popolazione-multipli/grafici-popolazione-multipli.component';
import { StatistichePopolazioneMultipliComponent } from './views/comuni-multipli/statistiche-popolazione-multipli/statistiche-popolazione-multipli/statistiche-popolazione-multipli.component';
import { HomeComponent } from './views/home/home/home.component';


const routes: Routes = [
  { path: 'visualizza-storico', component: VisualizzaStoricoComponent },
  { path: 'grafici', component: GraficiComponent },
  { path: 'statistiche', component: StatisticheComponent },
  { path: 'grafici-popolazione-multipli', component: GraficiPopolazioneMultipliComponent },
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
  {
    path: 'andamento-demografico-comune-singolo',
    component: AndamentoDemograficoComuneSingoloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
