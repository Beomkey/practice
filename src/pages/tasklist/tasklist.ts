import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskList {
  tasks: Array<Task> = [];

  constructor(public navCtrl: NavController) {
    this.tasks=[
      {title: 'Milk', status: 'open'}
    ];
  }
  
  addItem() {
    let theNewTask: string = prompt("New task");
    if (theNewTask !== '') {
      this.tasks.push({title: theNewTask, status: 'open'});
    }
  }
  markAsDone(slidingItem: ItemSliding, task: any) {
    task.status = "done";
    slidingItem.close();
  }
  removeTask(slidingItem: ItemSliding, task: any) {
    task.status = "removed";
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    slidingItem.close();

  }
}

export class Task {
  title: string;
  status: string;
}
