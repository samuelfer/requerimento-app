import { Cargo } from './cargo.model';
import { TipoPessoa } from './tipo-pessoa.model';

export class Pessoa {
  id?: number;
  nome: string;
  cargo: Cargo;
  tipoPessoa: TipoPessoa;
  ativo: boolean;

  constructor() {}
}
