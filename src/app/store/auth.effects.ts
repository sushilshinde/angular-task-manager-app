import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  // Use this effect if we need to perform any async actions on login/logout
  constructor(private actions$: Actions) {}

  // Example effect for handling login (if needed)
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.isLogin),
        // Add any necessary side effects here
      ),
    { dispatch: false }
  );

  // Example effect for handling logout (if needed)
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.isLogout),
        // Add any necessary side effects here
      ),
    { dispatch: false }
  );
}
