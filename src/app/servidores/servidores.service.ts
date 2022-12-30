import { Servidor } from './../shared/model/servidor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Pessoa } from '../shared/model/pessoa.model';

@Injectable({
  providedIn: 'root',
})
export class ServidoresService {
  private apiUrl = `${environment.URL_API}/servidores`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Servidor[]> {
    return this.http.get<Servidor[]>(`${this.apiUrl}`);
  }

  listarPorId(id: number): Observable<Servidor> {
    return this.http.get<Servidor>(`${this.apiUrl}/${id}`);
  }

  cadastrar(pessoa: Servidor): Observable<Servidor> {
    return this.http.post<Servidor>(`${this.apiUrl}`, pessoa);
  }

  atualizar(pessoa: Servidor): Observable<Servidor> {
    return this.http.put<Servidor>(`${this.apiUrl}`, pessoa);
  }
}
