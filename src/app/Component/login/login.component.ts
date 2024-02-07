import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { ButtonComponentComponent } from '../button-component/button-component.component'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ToastModule, CustomInputComponent, ButtonComponentComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService],
})

export class LoginComponent implements AfterViewInit {
  username: string = '';
  password: string = '';

  @ViewChild('customInputUsername') inpUsername!: CustomInputComponent;
  @ViewChild('customInputPassword') inpPassword!: CustomInputComponent;
  @ViewChild('btnButton') button!: ButtonComponentComponent;

  ngAfterViewInit() {
    this.inpPassword.inputType = 'password';
    this.inpPassword.inputName = 'Password';
    this.inpUsername.inputName = 'Username';
    this.button.btnName = 'Login';

    this.inpPassword.newItemEvent.subscribe((newValue: any) => {
    this.inpPassword.inputValue = newValue.value;
    this.canClick();
    });

    this.inpUsername.newItemEvent.subscribe((newValue: any) => {
      this.inpUsername.inputValue = newValue.value;
      this.canClick();
    });

    this.button.newButtonEvent.subscribe((newValue: any) => {
      console.log(newValue);
    });
  }

  login() : void {
  }

  canClick() : void {
    this.button.btnEnable = (this.inpUsername.inputValue == '' || this.inpPassword.inputValue == '');
  }
}
