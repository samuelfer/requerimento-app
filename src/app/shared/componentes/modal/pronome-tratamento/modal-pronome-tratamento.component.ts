import { PronomeTratamento } from 'src/app/shared/model/pronome-tratamento.model';
import { Component } from '@angular/core';
import { MensagemService } from 'src/app/service/mensagemService';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal-pronome-tratamento',
  templateUrl: './modal-pronome-tratamento.component.html',
})
export class ModalPronomeTratamentoComponent {
  public pronomeTratamento = new PronomeTratamento();

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private mensagemService: MensagemService
  ) {}

  ngOnInit(): void {
    this.pronomeTratamento = this.config.data;
  }

  close() {
    if (this.pronomeTratamento.descricao !== undefined) {
      this.ref.close(this.pronomeTratamento);
    } else {
      this.mensagemService.mensagemAlerta('Preencha a descrição.');
    }
  }
}
