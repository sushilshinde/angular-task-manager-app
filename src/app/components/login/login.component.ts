import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(12),
    ]),
  })
  private subscription!: Subscription;
  constructor(private auth: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

  openSnackBar() {
    const config = new MatSnackBarConfig();
    config.horizontalPosition = 'center';
    config.verticalPosition = 'top';
    this._snackBar.open('Login Successful!', 'Ok');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.subscription = this.auth.login({ email, password }).subscribe(
        (result) => {
          this.router.navigate(['admin']);
          this.openSnackBar();
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

}
