import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gestao } from '../shared/model/gestao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GestoesService {
  private apiUrl = `${environment.URL_API}/gestoes`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Gestao[]> {
    return this.http.get<Gestao[]>(`${this.apiUrl}`);
  }

  listarPorId(id: number): Observable<Gestao> {
    return this.http.get<Gestao>(`${this.apiUrl}/${id}`);
  }

  cadastrar(gestao: Gestao): Observable<Gestao> {
    return this.http.post<Gestao>(`${this.apiUrl}`, gestao);
  }

  atualizar(gestao: Gestao): Observable<Gestao> {
    return this.http.put<Gestao>(`${this.apiUrl}`, gestao);
  }
}
