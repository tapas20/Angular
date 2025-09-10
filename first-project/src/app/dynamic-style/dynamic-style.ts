import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  imports: [],
  templateUrl: './dynamic-style.html',
  styleUrl: './dynamic-style.css',
})
export class DynamicStyle {
  color: string = 'blue';
  textColor: string = 'yellow';

  mode = true;

  changeStyle() {
    this.mode = !this.mode;
    if (this.mode) {
      this.color = 'blue';
      this.textColor = 'yellow';
    } else {
      this.color = 'black';
      this.textColor = 'white';
    }
  }
}
