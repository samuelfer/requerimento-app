import { PronomeTratamento } from './../shared/model/pronome-tratamento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PronomeTratamentoService {
  private apiUrl = `${environment.URL_API}/pronomes-tratamento`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<PronomeTratamento[]> {
    return this.http.get<PronomeTratamento[]>(`${this.apiUrl}`);
  }

  listarPorId(id: number): Observable<PronomeTratamento> {
    return this.http.get<PronomeTratamento>(`${this.apiUrl}/${id}`);
  }

  cadastrar(
    pronomeTratamento: PronomeTratamento
  ): Observable<PronomeTratamento> {
    return this.http.post<PronomeTratamento>(
      `${this.apiUrl}`,
      pronomeTratamento
    );
  }

  atualizar(
    pronomeTratamento: PronomeTratamento
  ): Observable<PronomeTratamento> {
    return this.http.put<PronomeTratamento>(
      `${this.apiUrl}`,
      pronomeTratamento
    );
  }
}
