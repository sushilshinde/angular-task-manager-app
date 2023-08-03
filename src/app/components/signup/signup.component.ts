import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(12)
    ]),
    cnf_password: new FormControl('',Validators.required),
  })

  onSubmit(){
    console.log(this.signupForm.value)

  }

}
