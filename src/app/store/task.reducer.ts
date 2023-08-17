import { createReducer, on } from '@ngrx/store';
import { isUserLogin, userLogout } from './task.action';

export interface TaskState {
  isLoggedIn: boolean;
}

export const initialState: TaskState = {
  isLoggedIn: false,
};

export const taskReducer = createReducer(
  initialState,
  on(isUserLogin, (state, { isLoggedIn }) => ({ ...state, isLoggedIn })),
  on(userLogout, (state) => ({ ...state, isLoggedIn: false })),
);
