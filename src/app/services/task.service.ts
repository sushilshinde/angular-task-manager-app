import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksDb } from '../models/tasks.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url: string = "http://localhost:3000/murty";

  constructor(private http:HttpClient) { }

  get_all_tasks():Observable<TasksDb[]>{
    return this.http.get<TasksDb[]>(this.url);
  }
}
