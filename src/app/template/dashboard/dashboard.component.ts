import { Dashboard } from './../../shared/dashboard-count.model';
import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  loading = false;
  counts: Dashboard;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.loading = true;
    this.dashboardService.counts().subscribe(
      (response: Dashboard): void => {
        this.counts = response;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
