import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Login } from './login/login';
// import { Profile } from './profile/profile';
import { CounterApp } from './counter-app/counter-app';

@Component({
  selector: 'app-root',
  imports: [CounterApp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('Angular');
  // name = 'Tapas';
  // x = 10;
  // y = 20;

  // handleClick() {
  //   console.log('Button Clicked');
  //   this.otherFunction();
  // }

  // otherFunction() {
  //   console.log('Other Function');
  // }

  // handleEvent(event: any) {
  //   console.log('Button', event.type);
  //   // console.log('Button Clicked', event.target);
  //   // console.log('Button Clicked', event.target.id);
  //   // console.log('Button Clicked', event.target.className);
  //   console.log('Button', event?.target?.value);
  // }.

  name = '';
  displayName = '';
  email = '';
  getName(event: any) {
    const name = event.target.value;
    // console.log('Event', name);
    this.name = name;
  }

  showName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = 'Tapas';
  }

  getEmail(val: string) {
    console.log('Email', val);
    this.email = val;
  }

  setEmail() {
    this.email = 'tapas@gmail.com';
  }
}
