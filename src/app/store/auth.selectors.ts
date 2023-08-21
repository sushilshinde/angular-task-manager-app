import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer'; // Update this import path

export const selectAuthState = (state: any) => state.auth; // Update the type of 'state'

export const selectLoggedInUser = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.loggedInUser
);
