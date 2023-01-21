import { Configuracao } from './../shared/model/configuracao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracaoService {
  private apiUrl = `${environment.URL_API}/configuracoes`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Configuracao> {
    return this.http.get<Configuracao>(`${this.apiUrl}`);
  }

  cadastrar(configuracao: Configuracao): Observable<Configuracao> {
    return this.http.post<Configuracao>(`${this.apiUrl}`, configuracao);
  }

  atualizar(configuracao: Configuracao): Observable<Configuracao> {
    return this.http.put<Configuracao>(`${this.apiUrl}`, configuracao);
  }
}
