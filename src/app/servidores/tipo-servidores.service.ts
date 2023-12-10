import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { TipoServidor } from '../shared/model/tipo-servidor.model';

@Injectable({
  providedIn: 'root',
})
export class TipoServidoresService {
  private apiUrl = `${environment.URL_API}/tipo-servidores`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<TipoServidor[]> {
    return this.http.get<TipoServidor[]>(`${this.apiUrl}`);
  }

  listarPorId(id: number): Observable<TipoServidor> {
    return this.http.get<TipoServidor>(`${this.apiUrl}/${id}`);
  }

  cadastrar(tipoServidor: TipoServidor): Observable<TipoServidor> {
    return this.http.post<TipoServidor>(`${this.apiUrl}`, tipoServidor);
  }

  atualizar(tipoServidor: TipoServidor): Observable<TipoServidor> {
    return this.http.put<TipoServidor>(`${this.apiUrl}`, tipoServidor);
  }
}
