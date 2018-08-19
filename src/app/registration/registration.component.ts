import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import {ClientService} from '../core/client.service';
import { Observable } from '../../../node_modules/rxjs';
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
    private clientService :ClientService) {
    this.createForm();
    }
  ngOnInit() {
  }

  registration() {
    this.isLoading = true;
    //let msg :Observable;
   // msg = 
    this.clientService.registration(this.registrationForm.value);
     /*.pipe(finalize(() => {
      this.registrationForm.markAsPristine();
      this.isLoading = false;
    }))
    .subscribe(credentials => {
      //log.debug(`${credentials.username} successfully logged in`);
      this.router.navigate(['/login'], { replaceUrl: true });
    }, error => {
      this.error = error;
    });*/
  }
  private createForm() {
    this.registrationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      /*gender: ['', Validators.required],*/
      userid: ['', Validators.required],
      password: ['', Validators.required],
      rpassword: ['', Validators.required],
      rname: ['', Validators.required],
      relationship: ['', Validators.required]
     });
  }
}
