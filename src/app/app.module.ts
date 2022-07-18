import { HttpClientModule } from '@angular/common/http';
import { RequerimentoModule } from './requerimento/requerimento.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { TopMenuComponent } from './template/top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    TopMenuComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RequerimentoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
