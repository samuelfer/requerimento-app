import { TipoPessoa } from 'src/app/shared/model/tipo-pessoa.model';

import { Cargo } from './cargo.model';

export class Vereador {
  id?: number;
  nome: string;
  cargo: Cargo;
  ativo: boolean;
  tipoPessoa: TipoPessoa;

  constructor() {}
}
