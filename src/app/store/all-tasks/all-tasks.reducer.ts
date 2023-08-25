import { createReducer, on } from '@ngrx/store';
import { fetch_all_tasks } from './all-tasks.actions';
import { TasksDb } from 'src/app/models/tasks.model';
import { initialState } from './all-tasks.state';

export const allTasksReducer = createReducer(
  initialState,
  on(fetch_all_tasks, (state, action) => {
    return { ...state, tasks:action.tasks };
  })
);
