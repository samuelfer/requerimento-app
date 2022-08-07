import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requerimento } from '../shared/model/requerimento.model';

@Injectable({
  providedIn: 'root',
})
export class RequerimentoService {
  private apiUrl = `${environment.URL_API}/requerimentos`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Requerimento[]> {
    return this.http.get<Requerimento[]>(`${this.apiUrl}`);
  }

  listarPorId(id: number): Observable<Requerimento> {
    return this.http.get<Requerimento>(`${this.apiUrl}/${id}`);
  }

  gerarPdf(requerimento: Requerimento): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${requerimento.id}/gerarpdf`, {
      responseType: 'blob' as 'json',
    });
  }

  cadastrar(requerimento: Requerimento): Observable<Requerimento> {
    return this.http.post<Requerimento>(`${this.apiUrl}`, requerimento);
  }

  atualizar(requerimento: Requerimento): Observable<Requerimento> {
    return this.http.put<Requerimento>(`${this.apiUrl}`, requerimento);
  }
}
