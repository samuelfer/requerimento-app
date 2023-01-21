import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-box-documentos',
  templateUrl: './card-box-documentos.component.html',
  styleUrls: ['./card-box-documentos.component.scss'],
})
export class CardBoxDocumentosComponent implements OnInit {
  @Input() cor = 'info';
  @Input() titulo = '';
  @Input() icon = 'fas fa-file-pdf';
  @Input() rota: string;
  @Input() title: string;
  constructor() {}

  ngOnInit(): void {}
}
