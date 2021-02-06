import { DatoStatistico } from './dati-statistici';
export class Comune{
  codice: string;
  denominazione: string;
  dati: DatoStatistico[];
  area: string;
  latitudine: number;
  longitudine: number;
  altezza: number;
}
