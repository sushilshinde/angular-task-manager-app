import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../models/tasks.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  newTaskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
  });
  allTasks?: any = [];
  title?: string;
  priority?: string;

  constructor(private router: Router) {}

  onSubmit() {
    let newTask = {
      title: this.title,
      priority: this.priority,
    };
    // let data: any = localStorage.getItem('all_tasks');
    // this.allTasks.push(newTask);
    // console.log(this.allTasks);
    console.log(newTask);
    // console.log(JSON.parse(data));
    if (this.newTaskForm.valid) {
      this.router.navigate(['admin/home']);
    }
    // let newTask = {
    //   avatar:
    //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    //   class: 'low priority',
    //   comments: [],
    //   priority: 'Low Priority',
    //   rating: 1,
    //   title: 'testing',
    // };
    // this.allTasks = localStorage.getItem('all_tasks');
    // console.log(this.allTasks);
    // this.allTasks.map((data: any) => {
    //   if (data.category === 'Backlog') {
    //     data.tasks.push(newTask);
    //   }
    // });
    // console.log(this.allTasks);
  }
}
