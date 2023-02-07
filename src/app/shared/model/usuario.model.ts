import { Role } from '../enum/role-enum';

export class Usuario {
  id?: number;
  nome: string;
  username: string;
  ativo: boolean;
  senha: string;
  role: Role;
  token?: string;

  constructor() {}
}
