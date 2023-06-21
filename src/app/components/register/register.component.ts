import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstName: any;

  constructor() {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z].*'),
    ]),
  });

  //   get firstName(): FormControl {
  //     return this.registerForm.get('firstName') as FormControl;
  //   }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
