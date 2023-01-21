import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.scss'],
})
export class CardBoxComponent implements OnInit {
  @Input() cor = 'info';
  @Input() quantidade = 0;
  @Input() titulo = '';
  @Input() icon = 'fas fa-file-pdf';
  @Input() rota: string;
  constructor() {}

  ngOnInit(): void {}
}
