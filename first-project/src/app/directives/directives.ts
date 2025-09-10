import { NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  show: boolean = false;

  toggleShow() {
    this.show = !this.show;
  }

  users = ['Tapas', 'Tom', 'Jerry', 'Spike', 'Tyke', 'Butch'];

  usersData = [
    {
      name: 'Tapas',
      age: 30,
      job: 'Developer',
    },
    {
      name: 'Tom',
      age: 35,
      job: 'Developer',
    },
    {
      name: 'Jerry',
      age: 28,
      job: 'Developer',
    },
    {
      name: 'Spike',
      age: 40,
      job: 'Developer',
    },
  ];
}
