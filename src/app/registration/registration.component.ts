import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})


export class RegistrationComponent implements OnInit {


  error: string;
  registrationForm: FormGroup;
  isLoading = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
) {
    this.createForm();
    }
  ngOnInit() {
  }

  registration() {
    this.isLoading = true;
   // this.clientcall.registration(this.registrationForm.value)
      
  }
  private createForm() {
    this.registrationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      userid: ['', Validators.required],
      password: ['', Validators.required],
      rpassword: ['', Validators.required],
      rname: ['', Validators.required],
      relationship: ['', Validators.required]
      //remember: true
    });
  }
}
