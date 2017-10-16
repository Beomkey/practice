import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskList {
  tasks: FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public af: AngularFireDatabase) {
    this.tasks= af.list('/tasks');
  }
  
  addItem() {
    let theNewTask: string = prompt("New task");
    if (theNewTask !== '') {
      this.tasks.push({title: theNewTask, status: 'open'});
    }
  }
  markAsDone(slidingItem: ItemSliding, task: Task) {
    this.tasks.update(task.$key, {status: 'done'});
    slidingItem.close();
  }

  removeTask(slidingItem: ItemSliding, task: Task) {
    this.tasks.remove(task.$key);
    slidingItem.close();
  }
}

export class Task {
  title: string;
  status: string;
  $key: any;
}
