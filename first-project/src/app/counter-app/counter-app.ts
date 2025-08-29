import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  count: number = 0;

  // increment() {
  //   this.count++;
  // }

  // decrement() {
  //   this.count--;
  // }

  // reset() {
  //   this.count = 0;
  // }

  handleCounter(val: string) {
    if (val === 'minus') {
      if (this.count <= 0) {
        this.count = 0;
        return;
      }
      this.count--;
    } else if (val === 'plus') {
      this.count++;
    } else {
      this.count = 0;
    }
  }
}
