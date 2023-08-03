import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  forgotpasswordForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
  })

  onSubmit(){
    console.log('Reset password link was sent to your given email id')
  }

}
