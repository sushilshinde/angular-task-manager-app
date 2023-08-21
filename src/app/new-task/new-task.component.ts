import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task, TasksDb } from '../models/tasks.model';

interface Options{
  value: string,
  viewValue: string
}

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
  options: Options[] = [
    {value: 'Low Priority', viewValue: 'Low'},
    {value: 'Medium Priority', viewValue: 'Medium'},
    {value: 'High Priority', viewValue: 'High'},
  ];

  updatedTasks?: TasksDb[];
  title?: string;
  priority?: string;

  constructor(private router: Router) {}

  onSubmit() {
    // checking for form validation
    if (this.newTaskForm.valid) {
      const user = this.newTaskForm.value;
      let newTask = {
        ...user,
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        class: 'low-priority',
        comments: ["test", "testing"],
        rating: 1,
      };
      console.log(newTask);
      // accessing all tasks from localStorage
      let all_stored_tasks:any = localStorage.getItem('all_tasks');
      this.updatedTasks = JSON.parse(all_stored_tasks);
      console.log(this.updatedTasks);
      // looping into the each individual object
      this.updatedTasks?.forEach((data: any) => {
        // pushing the new task into the backlog category
        if (data.category === 'Backlog') {
          data.tasks.push(newTask);
        }return;
      });
      console.log(this.updatedTasks);
      // now updating the localStorage with updated tasks
      localStorage.setItem('all_tasks',JSON.stringify(this.updatedTasks))
      // this.newTaskForm.reset();
      this.router.navigate(['admin/home']);
    }
  }
}
