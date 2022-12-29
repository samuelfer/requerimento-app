import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { Cargo } from './cargo.model';
export class Assessor {
  id?: number;
  nome: string;
  cargo: Cargo;
  vereador: Pessoa;

  constructor() {}
}
