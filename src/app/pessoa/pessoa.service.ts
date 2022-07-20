import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../shared/pessoa.model';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  private apiUrl = `${environment.URL_API}/pessoas`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.apiUrl}`);
  }
}
