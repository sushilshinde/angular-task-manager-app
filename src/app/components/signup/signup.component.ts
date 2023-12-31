import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from '../validator/password-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(12)
    ]),
    cnf_password: new FormControl('', Validators.required),
  }, { validators: passwordMatchValidator() }); // Add the validators option


  private subscription!: Subscription;

  constructor(private auth: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.open('Registration Succesfull!!', 'Ok', {
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const user = this.signupForm.value;
      this.subscription = this.auth.register(user).subscribe(
        (result) => {
          console.log('User registered:', result);
          this.signupForm.reset();
          this.openSnackBar();
          this.router.navigate(['login']);
        },
        (err: any) => {
          console.error('Registration failed:', err);
        }
      );
    }
  }


}
