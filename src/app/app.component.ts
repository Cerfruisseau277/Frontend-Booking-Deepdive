import { Component, NgModule, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from './Component/login/login.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Deepdive-frontend';
}
