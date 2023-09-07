import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksDb } from '../models/tasks.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url: string = environment.apiUrl;

  constructor(private http:HttpClient) { 
  }

  get_all_tasks():Observable<TasksDb[]>{
    return this.http.get<TasksDb[]>(`${this.url}/all_tasks`);
  }

  update_all_tasks(all_tasks:any){
    return this.http.post(`${this.url}/all_tasks`,all_tasks)
  }
}
