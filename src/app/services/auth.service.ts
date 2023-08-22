import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/auth.actions'; // Import your AuthActions
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl; // Change this to your server URL
  private loginTimeKey = 'loginTime'; // Key for localStorage

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store
  ) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser'); // Remove user from local storage
    // localStorage.removeItem('all_tasks')
    this.store.dispatch(AuthActions.isLogout()); // Dispatch logout action
    this.router.navigate(['login']);
  }

  setLoginTime() {
    localStorage.setItem(this.loginTimeKey, new Date().toISOString()); // Store login time
  }

  getLoginTime(): Date | null {
    const loginTimeStr = localStorage.getItem(this.loginTimeKey);
    return loginTimeStr ? new Date(loginTimeStr) : null;
  }

  // Register a new user
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  // Login with user credentials
  login({ email, password }: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/users?email=${email}&password=${password}`)
      .pipe(
        map((result: any) => {
          console.log(result,"result");
          if (result.length > 0) {
            console.log("if condition");
            this.setToken('1%ab#3tev67#g*6%');
            this.setLoginTime();
            const index=result.findIndex((value:any)=>value.email===email)
            const user = { name: result[index].name, email };
  
            // Dispatch action to set logged-in user
            this.store.dispatch(AuthActions.setLoggedInUser({ user }));
  
            // Store user in local storage
            localStorage.setItem('loggedInUser', JSON.stringify(user));
  
            return { name: result[0].name, email };
          } else {
            throw new Error('Email or Password is incorrect.');
          }
        }),
        catchError(error => {
          return throwError(new Error('Email or Password is incorrect.'));
        })
      );
  }
}