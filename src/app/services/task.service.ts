import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksDb } from '../models/tasks.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url: string = 'assets/data/db.json';

  constructor(private http:HttpClient) { }

  get_all_tasks():Observable<TasksDb[]>{
    return this.http.get<TasksDb[]>(this.url);
  }
}
