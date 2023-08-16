import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TasksDb } from 'src/app/models/tasks.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css'],
})
export class BacklogComponent implements OnInit {
  all_tasks?: TasksDb[];
  value?: string = 'Low'

  constructor(private allList: TaskService) {}

  ngOnInit(): void {
    // getting the all task data from local storage
    const local_data = localStorage.getItem('all_tasks');

    // checking if all task are available or not in local storage
    if (local_data != null) {
      this.all_tasks = JSON.parse(local_data);
    } else {
      this.allList.get_all_tasks().subscribe((res: any) => {
        this.all_tasks = res.all_tasks;
        console.log(this.all_tasks);
      });
    }
  }

  onSortToHigh(category:string) {
    this.all_tasks?.forEach((data) => {
      if(data.category === category){
        data.tasks.sort((a, b) => a.rating - b.rating)
      }
    });
  }

  onSortToLow(category:string) {
    this.all_tasks?.forEach((data) => {
      if(data.category === category){
        data.tasks.sort((a, b) => b.rating - a.rating);
      }
    });
  }

  
  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log('drag and drop event occurs');
    localStorage.setItem('all_tasks', JSON.stringify(this.all_tasks));
    console.log(this.all_tasks);
  }
}
