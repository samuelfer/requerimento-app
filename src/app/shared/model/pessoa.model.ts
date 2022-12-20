import { TipoPessoa } from './tipo-pessoa.model';

export class Pessoa {
  id?: number;
  nome: string;
  cargo: string;
  tipoPessoa: TipoPessoa;

  constructor() {}
}
