import { Usuario } from 'src/app/shared/model/usuario.model';

export class UsuarioPerfil {
  id?: number;
  usuario: Usuario;
  rolesId: number[];

  constructor() {}
}
