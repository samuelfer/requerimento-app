import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-senha-input',
  templateUrl: './senha-input.component.html',
  styleUrls: ['./senha-input.component.scss'],
})
export class SenhaInputComponent {
  @Input() senha: string;
}
