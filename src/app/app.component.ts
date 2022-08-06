import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'requerimento-app';

  constructor(
    private router: Router,
    private config: PrimeNGConfig,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate('pt');
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService
      .get('primeng')
      .subscribe((res) => this.config.setTranslation(res));
  }
}
