import { TipoPessoa } from './tipo-pessoa.model';

export class Pessoa {
  id?: number;
  nome: string;
  email?: string;
  tipoPessoa: TipoPessoa;
  ativo: boolean;
  usuarioSistema: boolean;
  constructor() {}
}
