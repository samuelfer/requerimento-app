import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Perfil } from '../shared/model/perfil.model';

@Injectable({
  providedIn: 'root',
})
export class PerfisService {
  private apiUrl = `${environment.URL_API}/admin/perfis`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(`${this.apiUrl}`);
  }

  listarPorId(id: number): Observable<Perfil> {
    return this.http.get<Perfil>(`${this.apiUrl}/${id}`);
  }

  cadastrar(perfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(`${this.apiUrl}`, perfil);
  }

  atualizar(perfil: Perfil): Observable<Perfil> {
    return this.http.put<Perfil>(`${this.apiUrl}`, perfil);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
