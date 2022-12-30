import { TipoPessoa } from './tipo-pessoa.model';

export class Pessoa {
  id?: number;
  nome: string;
  tipoPessoa: TipoPessoa;
  ativo: boolean;

  constructor() {}
}
