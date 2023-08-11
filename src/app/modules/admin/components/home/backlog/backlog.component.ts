import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TasksDb } from 'src/app/models/tasks.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit{
  all_tasks?: TasksDb[];

  constructor(private allList: TaskService){}

  ngOnInit(): void {
    this.allList.get_all_tasks().subscribe((res:any) => {
      this.all_tasks = res.all_tasks;
      console.log(this.all_tasks);
    })
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    console.log('drag and drop event occurs');
    console.log(this.all_tasks);

  }

}
