import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-component',
  standalone: true,
  imports: [],
  templateUrl: './button-component.component.html',
  styleUrl: './button-component.component.scss'
})
export class ButtonComponentComponent {
  @Input() btnEnable: boolean = true;
  @Input() btnName: string = 'Click';

  @Output() newButtonEvent = new EventEmitter<any>();

  changeInputItem(value: any) {
    this.newButtonEvent.emit(value);
  }
}
