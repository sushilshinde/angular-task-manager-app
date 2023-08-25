import { createAction, props } from '@ngrx/store';

export const isLogin = createAction('isLogin');
export const setLoggedInUser = createAction('setLoggedInUser',props<{ user: any }>());
export const isLogout = createAction('isLogout');
