import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  loggedInUser: { name: string; email: string } | null;
}

const loggedInUserFromLocalStorage = localStorage.getItem('loggedInUser');

const initialState: AuthState = {
  isLoggedIn: false,
  loggedInUser: loggedInUserFromLocalStorage ? JSON.parse(loggedInUserFromLocalStorage) : null,
};


export const authReducer = createReducer(
  initialState,
  on(AuthActions.isLogin, (state) => ({ ...state, isLoggedIn: true })),
  on(AuthActions.setLoggedInUser, (state, { user }) => ({ ...state, loggedInUser: user })),
  on(AuthActions.isLogout, (state) => ({ ...state, loggedInUser: null }))
);
