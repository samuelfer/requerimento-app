import { Cargo } from 'src/app/shared/model/cargo.model';
import { TipoPessoa } from 'src/app/shared/model/tipo-pessoa.model';

export class Vereador {
  id?: number;
  nome: string;
  cargo: Cargo;
  ativo: boolean;
  tipoPessoa: TipoPessoa;

  constructor() {}
}
