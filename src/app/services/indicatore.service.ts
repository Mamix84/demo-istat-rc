import { Injectable } from '@angular/core';
import { PopolazioneElementareService } from '../eta-scolare/services/popolazione-elementare.service';
import { PopolazioneMaternaService } from '../eta-scolare/services/popolazione-materna.service';
import { PopolazioneMediaInferioreService } from '../eta-scolare/services/popolazione-media-inferiore.service';
import { PopolazioneMediaSuperioreService } from '../eta-scolare/services/popolazione-media-superiore.service';
import { PopolazioneNidoService } from '../eta-scolare/services/popolazione-nido.service';
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
    private mediaSuperiore: PopolazioneMediaSuperioreService
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
    }

    return null;
  }
}
