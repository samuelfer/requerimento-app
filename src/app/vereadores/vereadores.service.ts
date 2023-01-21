import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Vereador } from './../shared/model/vereador.model';

@Injectable({
  providedIn: 'root',
})
export class VereadoresService {
  private apiUrl = `${environment.URL_API}/vereadores`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Vereador[]> {
    return this.http.get<Vereador[]>(`${this.apiUrl}`);
  }

  listarPorId(id: number): Observable<Vereador> {
    return this.http.get<Vereador>(`${this.apiUrl}/${id}`);
  }

  cadastrar(pessoa: Vereador): Observable<Vereador> {
    return this.http.post<Vereador>(`${this.apiUrl}`, pessoa);
  }

  atualizar(pessoa: Vereador): Observable<Vereador> {
    return this.http.put<Vereador>(`${this.apiUrl}`, pessoa);
  }
}
