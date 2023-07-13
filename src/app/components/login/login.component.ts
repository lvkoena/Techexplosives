import { LoginServiceService } from './../../services/login-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm!: FormGroup;
    


    constructor( private LoginServiceService: LoginServiceService, private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email:['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]],
            password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]        
        })
    }

    onSubmit() {
        if(this.loginForm.valid) {
            this.LoginServiceService.login(this.loginForm.value.email, this.loginForm.value.password);
            this.router.navigate(['']);
        }
    }

    get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

}
