import { Injectable } from '@angular/core';
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
    private tassoNatalita: TassoNatalitaService
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
    }

    return null;
  }
}
