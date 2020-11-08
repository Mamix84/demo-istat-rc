import { DatoStatistico } from './dati-statistici';

export interface Comune{
  codice: string;
  denominazione: string;
  dati: DatoStatistico;

}
