import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent {
  @Input() inputName: string = 'Default';
  @Input() inputType: string = 'text';
  inputValue: any = '';

  @Output() newItemEvent = new EventEmitter<any>();

  changeInputItem(value: any) {
    this.newItemEvent.emit(value);
  }

}
