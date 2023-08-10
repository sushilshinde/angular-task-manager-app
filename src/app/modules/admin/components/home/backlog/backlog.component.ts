import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { BacklogTask, CompletedTask, InprogressTask, ReviewTask } from 'src/app/models/tasks.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit{

  backlog_tasks?: BacklogTask[];
  inprogress_tasks?: InprogressTask[];
  review_tasks?: ReviewTask[];
  completed_tasks?: CompletedTask[];

  constructor(private allList: TaskService){}

  ngOnInit(): void {
    this.allList.get_all_tasks().subscribe((res:any) => {
      this.backlog_tasks = res.backlog_tasks;
      this.inprogress_tasks = res.inprogress_tasks;
      this.review_tasks = res.review_tasks;
      this.completed_tasks = res.completed_tasks;
      console.log(res)
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
    console.log("dragged")
  }

}
