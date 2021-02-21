import { Injectable } from '@angular/core';

import { Comune } from '../model/comune';
import { IndiceFertilitaService } from './indice-fertilita.service';
import { TassoNatalitaService } from './tasso-natalita.service';

@Injectable({
  providedIn: 'root',
})
export class IndicatoreService {
  [x: string]: any;
  constructor(
    private indiceFertilita: IndiceFertilitaService,
    private tassoNatalita: TassoNatalitaService
  ) {}

  valutaIndicatore(indicatore: string, comune: Comune): any {
    switch (indicatore) {
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
