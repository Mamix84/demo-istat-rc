import { Comune } from './comune';
import { DatoStatistico } from './dati-statistici';

export interface Anno{
  listaComuni: Comune[];
  totale: DatoStatistico;
}
