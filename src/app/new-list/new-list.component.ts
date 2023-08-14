import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../models/tasks.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
})
export class NewListComponent {
  newTaskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
  });
  tasks?: any = [];
  title?:string;
  priority?: string;

  constructor(private router: Router) {}

  onSubmit() {
    let newTask = {
      title: this.title,
      priority: this.priority,
    };
    let data:any = localStorage.getItem('all_tasks')
    this.tasks.push(newTask)
    console.log(this.tasks);
    console.log(newTask);
    console.log(JSON.parse(data))
    if(this.newTaskForm.valid){
      this.router.navigate(['admin/home'])
    }
  }
}
