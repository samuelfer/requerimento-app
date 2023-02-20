import { Configuracao } from './../shared/model/configuracao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Oficio } from '../shared/model/oficio.model';
import { Pessoa } from '../shared/model/pessoa.model';

@Injectable({
  providedIn: 'root',
})
export class OficioService {
  private apiUrl = `${environment.URL_API}/oficios`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Oficio[]> {
    return this.http.get<Oficio[]>(`${this.apiUrl}`);
  }

  listarPorId(id: number): Observable<Oficio> {
    return this.http.get<Oficio>(`${this.apiUrl}/${id}`);
  }

  listarAssinantes(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.apiUrl}/assinantes`);
  }

  gerarPdf(oficio: Oficio): Observable<any> {
    return this.http.get<Oficio>(`${this.apiUrl}/${oficio.id}/gerarpdf`, {
      responseType: 'blob' as 'json',
    });
  }

  cadastrar(oficio: Oficio): Observable<Oficio> {
    return this.http.post<Oficio>(`${this.apiUrl}`, oficio);
  }

  atualizar(oficio: Oficio): Observable<Oficio> {
    return this.http.put<Oficio>(`${this.apiUrl}`, oficio);
  }

  download(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/download/${id}`, {
      responseType: 'blob',
    });
  }

  preview(oficio: Oficio): Observable<any> {
    return this.http.post(`${this.apiUrl}/preview-pdf`, oficio, {
      responseType: 'blob' as 'json',
    });
  }

  listarTextoPadrao(): Observable<Configuracao> {
    return this.http.get<Configuracao>(`${this.apiUrl}/texto-padrao`);
  }
}
