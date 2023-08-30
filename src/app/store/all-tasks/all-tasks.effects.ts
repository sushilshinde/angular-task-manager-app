import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from 'src/app/services/task.service';
import { fetch_all_tasks, load_tasks } from './all-tasks.actions';
import { exhaustMap, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class allTasksEffects {
  constructor(private taskService: TaskService, private actions$: Actions) {}

  requestTasks = createEffect(() =>
    this.actions$.pipe(
      ofType(load_tasks),
     exhaustMap((data) => {
        return this.taskService.get_all_tasks().pipe(map((res:any) => {
            console.log(res)
            return fetch_all_tasks({tasks:res})
        }))
     })
    )
  );
}
