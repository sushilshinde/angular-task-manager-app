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

  // backlog_tasks = [
  //   {
  //     priority: 'Low Priority',
  //     title: 'Company website redesign',
  //     class: 'low-priority',
  //     comments:[
  //       'good work'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
  //   },
  //   {
  //     priority: 'Medium Priority',
  //     title: 'Mobile app login process prototype',
  //     class: 'medium-priority',
  //     comments:[
  //       'nice',
  //       'good work'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
  //   },
  //   {
  //     priority: 'High Priority',
  //     title: 'Onboarding designs',
  //     class: 'high-priority',
  //     comments:[
  //       'nice'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
  //   },

  // ]
  // inprogress_tasks = [
  //   {
  //     priority: 'High Priority',
  //     title: 'Research and strategy for upcoming projects',
  //     class: 'high-priority',
  //     comments:[
  //       'good work'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
  //   },
  //   {
  //     priority: 'Medium Priority',
  //     title: 'Account profile flow diagrams',
  //     class: 'medium-priority',
  //     comments:[
  //       'nice',
  //       'good work'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
  //   },
  //   {
  //     priority: 'Low Priority',
  //     title: 'Slide templates for client pitch project',
  //     class: 'low-priority',
  //     comments:[
  //       'nice'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
  //   },
  //   {
  //     priority: 'Low Priority',
  //     title: 'Review administrator console designs',
  //     class: 'low-priority',
  //     comments:[
  //       'nice'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
  //   },

  // ]
  // review_tasks = [
  //   {
  //     priority: 'Low Priority',
  //     title: 'Dashboard layout design',
  //     class: 'low-priority',
  //     comments:[
  //       'good work'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
  //   },
  //   {
  //     priority: 'High Priority',
  //     title: 'Social media posts',
  //     class: 'high-priority',
  //     comments:[
  //       'nice',
  //       'good work'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
  //   },
  //   {
  //     priority: 'Low Priority',
  //     title: 'Shopping cart and catalog wireframes',
  //     class: 'low-priority',
  //     comments:[
  //       'nice'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
  //   },
  //   {
  //     priority: 'Medium Priority',
  //     title: 'End user flow charts',
  //     class: 'medium-priority',
  //     comments:[
  //       'nice'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
  //   },

  // ]
  // completed_tasks = [
  //   {
  //     priority: 'Low Priority',
  //     title: 'Review client spec document and give feedback',
  //     class: 'low-priority',
  //     comments:[
  //       'good work'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
  //   },
  //   {
  //     priority: 'Medium Priority',
  //     title: 'Navigation designs',
  //     class: 'medium-priority',
  //     comments:[
  //       'nice',
  //       'good work'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
  //   },
  //   {
  //     priority: 'Low Priority',
  //     title: 'User profile prototypes',
  //     class: 'low-priority',
  //     comments:[
  //       'nice'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
  //   },
  //   {
  //     priority: 'High Priority',
  //     title: 'Create style guide based on previous feedback',
  //     class: 'high-priority',
  //     comments:[
  //       'nice'
  //     ],
  //     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
  //   },

  // ]

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
