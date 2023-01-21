import { registerLocaleData } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { MensagemService } from 'src/app/service/mensagemService';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessoresModule } from './assessores/assessores.module';
import { CargosModule } from './cargos/cargos.module';
import { ConfiguracaoModule } from './configuracao/configuracao.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { OficioModule } from './oficio/oficio.module';
import { RequerimentoModule } from './requerimento/requerimento.module';
import { ServidoresModule } from './servidores/servidores.module';
import { CardBoxComponent } from './shared/componentes/card-box/card-box.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { FooterComponent } from './template/footer/footer.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { TopMenuComponent } from './template/top-menu/top-menu.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { VereadoresModule } from './vereadores/vereadores.module';
import { DashboardDocumentoComponent } from './template/dashboard-documento/dashboard-documento.component';
import { CardBoxDocumentosComponent } from './shared/componentes/card-box-documentos/card-box-documentos.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    TopMenuComponent,
    LoginComponent,
    CardBoxComponent,
    DashboardDocumentoComponent,
    CardBoxDocumentosComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RequerimentoModule,
    VereadoresModule,
    ServidoresModule,
    AssessoresModule,
    CargosModule,
    UsuariosModule,
    OficioModule,
    ConfiguracaoModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
    }),
  ],
  exports: [TranslateModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MensagemService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
