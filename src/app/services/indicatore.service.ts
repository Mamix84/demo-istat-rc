import { Injectable } from '@angular/core';
import { PopolazioneElementareService } from '../comune-singolo/eta-scolare/services/popolazione-elementare.service';
import { PopolazioneMaternaService } from '../comune-singolo/eta-scolare/services/popolazione-materna.service';
import { PopolazioneMediaInferioreService } from '../comune-singolo/eta-scolare/services/popolazione-media-inferiore.service';
import { PopolazioneMediaSuperioreService } from '../comune-singolo/eta-scolare/services/popolazione-media-superiore.service';
import { PopolazioneNidoService } from '../comune-singolo/eta-scolare/services/popolazione-nido.service';
import { PrevisionePopolazioneSingoloService } from '../comune-singolo/previsione-comune-singolo/services/previsione-popolazione-singolo.service';
import { Previsione10PopolazioneSingoloService } from '../comune-singolo/previsione-comune-singolo/services/previsione10-popolazione-singolo.service';
import { Previsione15PopolazioneSingoloService } from '../comune-singolo/previsione-comune-singolo/services/previsione15-popolazione-singolo.service';
import { Previsione20PopolazioneSingoloService } from '../comune-singolo/previsione-comune-singolo/services/previsione20-popolazione-singolo.service';
import { Previsione5PopolazioneSingoloService } from '../comune-singolo/previsione-comune-singolo/services/previsione5-popolazione-singolo.service';
import { Comune } from '../model/comune';
import { IndiceFertilitaService } from './indice-fertilita.service';
import { PopolazioneFemminileService } from './popolazione-femminile.service';
import { PopolazioneMaschileService } from './popolazione-maschile.service';
import { PopolazioneTotaleService } from './popolazione-totale.service';
import { TassoNatalitaService } from './tasso-natalita.service';

@Injectable({
  providedIn: 'root',
})
export class IndicatoreService {
  constructor(
    private popolazioneFemminile: PopolazioneFemminileService,
    private popolazioneMaschile: PopolazioneMaschileService,
    private popolazioneTotale: PopolazioneTotaleService,
    private indiceFertilita: IndiceFertilitaService,
    private tassoNatalita: TassoNatalitaService,
    private asiloNido: PopolazioneNidoService,
    private materna: PopolazioneMaternaService,
    private elementare: PopolazioneElementareService,
    private media: PopolazioneMediaInferioreService,
    private mediaSuperiore: PopolazioneMediaSuperioreService,
    private previsionePopolazione: PrevisionePopolazioneSingoloService,
    private previsionePopolazione5: Previsione5PopolazioneSingoloService,
    private previsionePopolazione10: Previsione10PopolazioneSingoloService,
    private previsionePopolazione15: Previsione15PopolazioneSingoloService,
    private previsionePopolazione20: Previsione20PopolazioneSingoloService
  ) {}

  valutaIndicatore(indicatore: string, comune: Comune): any {
    switch (indicatore) {
      case 'POPF': {
        return this.popolazioneFemminile.valutaIndicatore(comune);
      }
      case 'POPM': {
        return this.popolazioneMaschile.valutaIndicatore(comune);
      }
      case 'POPMF': {
        return this.popolazioneTotale.valutaIndicatore(comune);
      }
      case 'FERT': {
        return this.indiceFertilita.valutaIndicatore(comune);
      }
      case 'NATA': {
        return this.tassoNatalita.valutaIndicatore(comune);
      }
      case 'NIDO': {
        return this.asiloNido.valutaIndicatore(comune);
      }
      case 'SCMA': {
        return this.materna.valutaIndicatore(comune);
      }
      case 'SCEM': {
        return this.elementare.valutaIndicatore(comune);
      }
      case 'SCMI': {
        return this.media.valutaIndicatore(comune);
      }
      case 'SCMS': {
        return this.mediaSuperiore.valutaIndicatore(comune);
      }
      case 'PREV': {
        return this.previsionePopolazione.valutaIndicatore(comune);
      }
      case 'PREV5': {
        return this.previsionePopolazione5.valutaIndicatore(comune);
      }
      case 'PREV10': {
        return this.previsionePopolazione10.valutaIndicatore(comune);
      }
      case 'PREV15': {
        return this.previsionePopolazione15.valutaIndicatore(comune);
      }
      case 'PREV20': {
        return this.previsionePopolazione20.valutaIndicatore(comune);
      }
    }

    return null;
  }
}
