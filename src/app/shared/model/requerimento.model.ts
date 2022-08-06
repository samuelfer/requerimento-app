import { Pessoa } from './pessoa.model';
export class Requerimento {
  id?: number;
  pessoa: Pessoa;
  dataRequerimento: Date;
  assunto: string;
  numero: string;

  constructor() {}
}
