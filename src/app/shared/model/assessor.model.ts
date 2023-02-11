import { TipoPessoa } from 'src/app/shared/model/tipo-pessoa.model';
import { Vereador } from './vereador.model';

export class Assessor {
  id?: number;
  nome: string;
  email: string;
  tipoPessoa: TipoPessoa;
  ativo: boolean;
  vereador: Vereador;
  usuarioSistema: boolean;
  senha: string;
  constructor() {}
}
