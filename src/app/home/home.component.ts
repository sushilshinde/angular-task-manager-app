import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  allTasks = [
    {
      id: 1,
      title: 'Learn Angular',
      desc: 'Learn angular from basics to advanced',
      completed: false,
    },
    {
      id: 2,
      title: 'Hands-on',
      desc: 'Practice and apply all the concepts by doing hands-on',
      completed: false,
    }
  ];

  displayTask: string = '';

  constructor(){}

  ngOnInit(): void {

  }

  showTask(task:any){
    this.displayTask = task.desc;
  }


}
