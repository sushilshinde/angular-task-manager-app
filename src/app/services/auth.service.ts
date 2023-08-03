import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // we will receive token and save the token in the local storage.
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // isLoggedIn will check that tocken is present or not inside the local storage.
  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  // testing for login with signup data
  login({ email, password }: any): Observable<any> {
    const userDataJSON = localStorage.getItem('user');
    if (userDataJSON) {
      const userData = JSON.parse(userDataJSON);
      if (userData.email === email && userData.password === password) {
        this.setToken('1%ab#3tev67#g*6%');
        return of({ name: 'username', email });
      }
    }
    return throwError(new Error('Email or Password is incorrect.'));
  }
  

}

