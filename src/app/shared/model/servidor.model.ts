import { Cargo } from 'src/app/shared/model/cargo.model';
import { TipoPessoa } from 'src/app/shared/model/tipo-pessoa.model';

export class Servidor {
  id?: number;
  nome: string;
  email: string;
  tipoPessoa: TipoPessoa;
  ativo: boolean;
  cargo: Cargo;
  usuarioSistema: boolean;
  senha?: string;
  constructor() {}
}
