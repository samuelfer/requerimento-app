import { Pessoa } from './pessoa.model';
export class Requerimento {
  id?: number;
  vereador: Pessoa;
  dataRequerimento: Date;
  assunto: string;
  numero: string;

  constructor() {}
}
