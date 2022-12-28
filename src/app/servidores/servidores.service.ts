import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoPessoaEnum } from '../shared/enum/tipo-pessoa.enum';
import { Pessoa } from '../shared/model/pessoa.model';

@Injectable({
  providedIn: 'root',
})
export class ServidoresService {
  private apiUrl = `${environment.URL_API}/pessoas`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Pessoa[]> {
    const tipoPessoaId = TipoPessoaEnum.TIPO_SERVIDOR;
    return this.http.get<Pessoa[]>(`${this.apiUrl}/tipo/${tipoPessoaId}`);
  }

  listarPorId(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`);
  }

  cadastrar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${this.apiUrl}`, pessoa);
  }

  atualizar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.apiUrl}`, pessoa);
  }
}
