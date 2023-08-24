import { createAction, props } from '@ngrx/store';
import { TasksDb } from 'src/app/models/tasks.model';

export const load_tasks = createAction('[All Tasks Component] load_tasks')

export const fetch_all_tasks = createAction(
  '[All Tasks Component] fetch_all_tasks',
  props<{tasks:TasksDb}>()
);
