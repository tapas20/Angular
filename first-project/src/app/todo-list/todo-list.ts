import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  task = '';
  taskList: { id: number; task: string }[] = [];

  addTask() {
    if (this.task) {
      this.taskList.push({ id: this.taskList.length + 1, task: this.task });
      this.task = '';
      console.log(this.taskList);
    }
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter((task) => task.id !== id);
  }
}
