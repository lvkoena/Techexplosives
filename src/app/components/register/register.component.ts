import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendapiService } from 'src/app/services/backendapi.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  confirmPass: string = 'none';
  items:any;

  //Inject Router Dependency
  constructor(private router: Router, private BackendapiService: BackendapiService) {}

  ngOnInit(
    
  ): void {
    // this.BackendapiService.getAllProducts()
    //   .subscribe(res => {
    //     this.items = res;
    //    });
  }

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    surname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16),
    ]),
    confirmPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
    ]),
  });



  onSubmit() {
    if (this.password.value !== this.confirmPassword.value) {
      this.confirmPassword.setErrors({ mismatch: true });
      this.confirmPass = 'mismatch';
    } else {
      this.confirmPass = '';
    }

    if(this.registerForm.valid){
      this.BackendapiService.createUser(this.registerForm.value).subscribe({
        next: (val: any) => {
        // once the item has been added, display the success notification and reset the form
        //  this.successNotification();
        // this.router.navigate(['/login']);
        // console.log('Successfully registered'+this.registerForm.value)
        //   this.registerForm.reset();
        },
        
        error: (err: any) => {
          console.error (err);
        },
        
      });
    
  }
    
  }


  get Name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }

  get Surname(): FormControl {
    return this.registerForm.get('surname') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
  }
}
