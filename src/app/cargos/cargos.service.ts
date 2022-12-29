import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cargo } from '../shared/model/cargo.model';

@Injectable({
  providedIn: 'root',
})
export class CargosService {
  private apiUrl = `${environment.URL_API}/cargos`;

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${this.apiUrl}`);
  }

  listarPorId(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(`${this.apiUrl}/${id}`);
  }

  cadastrar(cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(`${this.apiUrl}`, cargo);
  }

  atualizar(cargo: Cargo): Observable<Cargo> {
    return this.http.put<Cargo>(`${this.apiUrl}`, cargo);
  }
}
