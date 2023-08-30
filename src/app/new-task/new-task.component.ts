import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Task, TasksDb } from '../models/tasks.model';
import { TaskService } from '../services/task.service';

interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit{
  newTaskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
  });
  options: Options[] = [
    { value: 'Low Priority', viewValue: 'Low' },
    { value: 'Medium Priority', viewValue: 'Medium' },
    { value: 'High Priority', viewValue: 'High' },
  ];

  updatedTasks?: TasksDb[];
  title?: string;
  priority?: string;
  className?: string;
  rating?: number;

  constructor(private allList: TaskService,private router: Router) {}

  ngOnInit():void{
    this.allList.get_all_tasks().subscribe((res) => {
      this.updatedTasks = res;
      console.log(this.updatedTasks)
    });
    
  }

  getClassName(){
    if(this.newTaskForm.value.priority === "Low Priority"){
      this.className = 'low-priority';
      this.rating = 1;
    }else if(this.newTaskForm.value.priority === "Medium Priority"){
      this.className = 'medium-priority';
      this.rating = 2;
    }else{
      this.className = 'high-priority';
      this.rating = 3;
    }
  }

  

  onSubmit() {
    // checking for form validation
    this.getClassName();
    if (this.newTaskForm.valid) {
      const user = this.newTaskForm.value;
      let newTask = {
        ...user,
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        class: this.className,
        comments: [],
        rating: this.rating,
      };
      console.log(newTask);
      // accessing all tasks from localStorage
      // looping into the each individual object
      this.updatedTasks?.forEach((data: any) => {
        // pushing the new task into the backlog category
        if (data.category === 'Backlog') {
          data.tasks.push(newTask);
        }
        return;
      });
      console.log(this.updatedTasks);
      // now updating the localStorage with updated tasks
      this.allList.update_all_tasks(this.updatedTasks).subscribe(res => console.log(res))
      location.reload()
    }
  }
}
