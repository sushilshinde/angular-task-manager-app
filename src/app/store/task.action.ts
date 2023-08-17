import { createAction, props } from '@ngrx/store';

export const isUserLogin = createAction('isUserLogin', props<{ isLoggedIn: boolean }>());
export const userLogout = createAction('userLogout');
