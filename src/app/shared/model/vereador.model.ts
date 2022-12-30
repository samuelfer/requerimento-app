import { TipoPessoa } from 'src/app/shared/model/tipo-pessoa.model';
import { Assessor } from './assessor.model';
import { Cargo } from './cargo.model';

export class Vereador {
  id?: number;
  nome: string;
  cargo: Cargo;
  assessor?: Assessor[];
  ativo: boolean;
  tipoPessoa: TipoPessoa;

  constructor() {}
}
