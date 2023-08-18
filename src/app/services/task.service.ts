import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksDb } from '../models/tasks.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url: string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  get_all_tasks():Observable<TasksDb[]>{
    return this.http.get<TasksDb[]>(`${this.url}/all_tasks`);
  }

  // post_a_task(newTask:any){
  //   return this.http.post(`${this.url}/all_tasks?category=Backlog`,newTask)
  // }
}
