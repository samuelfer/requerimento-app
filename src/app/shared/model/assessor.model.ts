import { TipoPessoa } from 'src/app/shared/model/tipo-pessoa.model';
import { Cargo } from './cargo.model';
import { Vereador } from './vereador.model';

export class Assessor {
  id?: number;
  nome: string;
  cargo: Cargo;
  tipoPessoa: TipoPessoa;
  ativo: boolean;
  vereador: Vereador;

  constructor() {}
}
