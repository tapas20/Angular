import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular');
  name = 'Tapas';
  x = 10;
  y = 20;

  handleClick() {
    console.log('Button Clicked');
    this.otherFunction();
  }

  otherFunction() {
    console.log('Other Function');
  }
}
