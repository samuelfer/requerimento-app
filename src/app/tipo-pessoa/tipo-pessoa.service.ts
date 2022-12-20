import { TipoPessoa } from '../shared/model/tipo-pessoa.model';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TipoPessoaService {
  private apiUrl = `${environment.URL_API}/tipo-pessoa`;

  constructor(private http: HttpClient) {}

  listarTipoPessoas(): Observable<TipoPessoa[]> {
    return this.http.get<TipoPessoa[]>(`${this.apiUrl}`);
  }
}
