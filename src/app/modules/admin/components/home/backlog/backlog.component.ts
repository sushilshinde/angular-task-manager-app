import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TasksDb } from 'src/app/models/tasks.model';
import { TaskService } from 'src/app/services/task.service';
import { load_tasks } from 'src/app/store/all-tasks/all-tasks.actions';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css'],
})
export class BacklogComponent implements OnInit {
  all_tasks?: TasksDb[];
  value?: string = 'Low'

  constructor(private allList: TaskService, private store: Store<{tasks: TasksDb[]}>) {}

  // initializing the data
  ngOnInit(): void {
    // getting the all task data from local storage
    const local_data = localStorage.getItem('all_tasks');

    // checking if all task are available or not in local storage
    if (local_data != null) {
      this.all_tasks = JSON.parse(local_data);
    } else {
      this.store.dispatch(load_tasks())
      this.store.select("tasks").subscribe((res: any) => {
        this.all_tasks = res.tasks;
        localStorage.setItem('all_tasks', JSON.stringify(this.all_tasks));
        console.log(this.all_tasks);
      });
    }
  }
//  sorting from low to high 
  onSortToHigh(category:string) {
    this.all_tasks?.forEach((data) => {
      if(data.category === category){
        data.tasks.sort((a, b) => a.rating - b.rating)
      }
    });
  }
    // sorting from high to low
  onSortToLow(category:string) {
    this.all_tasks?.forEach((data) => {
      if(data.category === category){
        data.tasks.sort((a, b) => b.rating - a.rating);
      }
    });
  }

  // drag and drop event from angular material cdk
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
    // storing the modified means after drag, list reorders to be storing in local storage
    localStorage.setItem('all_tasks', JSON.stringify(this.all_tasks));
    console.log(this.all_tasks);
  }
}
