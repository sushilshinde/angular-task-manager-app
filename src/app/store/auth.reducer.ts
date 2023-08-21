import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.isLogin, (state) => ({ ...state, isLoggedIn: true })),
  on(AuthActions.isLogout, (state) => ({ ...state, isLoggedIn: false }))
);

