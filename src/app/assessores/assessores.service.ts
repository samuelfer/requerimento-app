import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Assessor } from './../shared/model/assessor.model';

@Injectable({
  providedIn: 'root',
})
export class AssessoresService {
  private apiUrl = `${environment.URL_API}/assessores`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Assessor[]> {
    return this.http.get<Assessor[]>(`${this.apiUrl}`);
  }

  listarPorId(id: number): Observable<Assessor> {
    return this.http.get<Assessor>(`${this.apiUrl}/${id}`);
  }

  cadastrar(pessoa: Assessor): Observable<Assessor> {
    return this.http.post<Assessor>(`${this.apiUrl}`, pessoa);
  }

  atualizar(pessoa: Assessor): Observable<Assessor> {
    return this.http.put<Assessor>(`${this.apiUrl}`, pessoa);
  }
}
