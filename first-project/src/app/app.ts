import { Component, computed, effect, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Login } from './login/login';
import { Profile } from './profile/profile';
import { CounterApp } from './counter-app/counter-app';
import { FormsModule } from '@angular/forms';
import { TodoList } from './todo-list/todo-list';
import { DynamicStyle } from './dynamic-style/dynamic-style';
import { Directives } from './directives/directives';

@Component({
  selector: 'app-root',
  imports: [CounterApp, Profile, FormsModule, TodoList, DynamicStyle, Directives],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // styleUrls: ["./profilebutton.css", "./app.css"]
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
  // name = '';
  // displayName = '';
  // email = '';
  // getName(event: any) {
  //   const name = event.target.value;
  //   // console.log('Event', name);
  //   this.name = name;
  // }
  // showName() {
  //   this.displayName = this.name;
  // }
  // setName() {
  //   this.name = 'Tapas';
  // }
  // getEmail(val: string) {
  //   console.log('Email', val);
  //   this.email = val;
  // }
  // setEmail() {
  //   this.email = 'tapas@gmail.com';
  // }
  // display = true;
  // toggleDisplay() {
  //   this.display = !this.display;
  // }
  // color = 1;
  // setColor(val: number) {
  //   this.color = val;
  // }
  // handleInput(event: any) {
  //   this.color = event.target.value;
  // }
  // color = 'blue';
  // handleColor(val: string) {
  //   this.color = val;
  // }
  // handleInput(event: any) {
  //   this.color = event.target.value;
  // }
  // users = ['Tapas', 'Jyoti', 'Shreya', 'Shubham', 'Himanshu', 'Rahul'];
  // students = [
  //   {
  //     name: 'Tapas',
  //     age: 21
  //   },
  //   {
  //     name: 'Jyoti',
  //     age: 20
  //   },
  //   {
  //     name: 'Shreya',
  //     age: 21
  //   },
  //   {
  //     name: 'Shubham',
  //     age: 21
  //   },
  //   {
  //     name: 'Himanshu',
  //     age: 21
  //   },
  //   {
  //     name: 'Rahul',
  //     age: 20
  //   }
  // ]
  // getName(name: string) {
  //   console.log('Name', name);
  // }
  // val = signal(10);
  // x = 20;
  // incrementVal() {
  //   this.val.update((val) => val + 1);
  // }
  // constructor() {
  //   effect(() => {
  //     console.log('X: ', this.x);
  //   });
  // }
  // updateVal() {
  //   this.x = 30;
  // }
  // constructor() {
  //   effect(() => {
  //     console.log('Val: ', this.val());
  //   });
  // }
  // updateVal() {
  //   this.val.set(this.val() + 1);
  // }
  // Define data type for value
  // data = signal<number>(11);
  // Define data type for signal
  // data: WritableSignal<number | string> = signal(11);
  // count: Signal<number> = computed(() => 100);
  // updateSignal() {
  //   // this.data.set('Tapas');
  //   this.data.update((val) => val + 1);
  // }
  // x = signal(10);
  // y = signal(20);
  // z = computed(() => this.x() + this.y());
  // showValue() {
  //   console.log('Value', this.z());
  //   this.x.set(100);
  //   console.log('Value', this.z());
  // }
  // username = signal('Tapas');
  // constructor() {
  //   effect(() => {
  //     console.log('Username', this.username());
  //   });
  // }
  // changeUsername() {
  //   this.username.set('Jyoti');
  // }
  // count = signal(0);
  // displayHeading = false;
  // // changeDisplay() {
  // //   this.displayHeading = !this.displayHeading;
  // // }
  // constructor() {
  //   effect(() => {
  //     if (this.count() === 2) {
  //       this.displayHeading = true;
  //       setTimeout(() => {
  //         this.displayHeading = false;
  //       }, 3000);
  //     } else {
  //       this.displayHeading = false;
  //     }
  //   });
  // }
  // changeDisplay() {
  //   this.count.set(this.count() + 1);
  // }
  // users = ['Tapas', 'Jyoti', 'Shreya', 'Shubham', 'Himanshu', 'Rahul'];
  // users = [];

  // name = 'Tapas';

  // handleInput(event: any) {
  //   this.name = event.target.value;
  // }


}
