import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(12),
    ]),
  })

  constructor(private auth:AuthService, private router:Router){}

  ngOnInit():void{
    // if user is already loged in then we dont need to login again..
    // so we are redirecting to home page..
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }

  }

  onSubmit(){
    //console.log(this.loginForm.value)
    if (this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['admin'])
        },
        (err: Error) => {
          alert(err.message);
        }
      )
    }
  }
}
