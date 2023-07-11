import { LoginServiceService } from './../../services/login-service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


    constructor( private LoginServiceService: LoginServiceService ) { }

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16)
        ]), 
    });

    onSubmit() {
        if(this.loginForm.valid) {
            // this.LoginServiceService.login(this.loginForm.value.email, this.loginForm.value.password);
        }
    }

    get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

}
