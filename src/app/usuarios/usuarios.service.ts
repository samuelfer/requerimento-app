import { UsuarioPerfil } from './../shared/model/usuario-perfil.model';
import { Usuario } from '../shared/model/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private apiUrl = `${environment.URL_API}/admin/usuarios`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}`);
  }

  listarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  cadastrar(pessoa: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}`, pessoa);
  }

  atualizar(pessoa: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}`, pessoa);
  }

  associarUsuarioPerfil(
    usuarioPerfil: UsuarioPerfil
  ): Observable<UsuarioPerfil> {
    return this.http.post<UsuarioPerfil>(
      `${this.apiUrl}/associar-perfil`,
      usuarioPerfil
    );
  }
}
