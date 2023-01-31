import { PronomeTratamento } from './pronome-tratamento.model';
import { Pessoa } from './pessoa.model';
export class Oficio {
  id?: number;
  assinante: Pessoa;
  dataOficio: Date;
  texto: string;
  assunto: string;
  numero: string;
  destinatario: string;
  cargoDestinatario: string;
  pronomeTratamento: PronomeTratamento;

  constructor() {}
}
