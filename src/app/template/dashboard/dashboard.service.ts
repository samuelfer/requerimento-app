import { Dashboard } from './../../shared/dashboard-count.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = `${environment.URL_API}/dashboard`;

  constructor(private http: HttpClient) {}

  counts(): Observable<Dashboard> {
    return this.http.get<Dashboard>(`${this.apiUrl}`);
  }
}
