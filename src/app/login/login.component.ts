import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import {Credential} from '../core/model/Credential';
import {AuthenticationService} from '../core/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;
  loginForm: FormGroup;
  isLoading = false;
  credentials:Credential;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService) {
    this.createForm();
  }

  ngOnInit() { }
  login() {
    this.isLoading = true;
    console.info('inside login component');
    console.info(this.loginForm.value);
    this.authenticationService.login(this.loginForm.value)
    this.router.navigate(['/dashboard'], { replaceUrl: true });
  }
/*
  login() {
    this.isLoading = true;
    console.debug('inside login component');
    //this.credentials =new Credentials(this.loginForm.controls.username,.this.loginForm.controls.password);
    this.authenticationService.login(this.loginForm.value)

      .pipe(finalize(() => {
        this.loginForm.markAsPristine();
        this.isLoading = false;
      }))
      .subscribe(credentials => {
        //log.debug(`${credentials.username} successfully logged in`);
        this.authenticationService.setCredentials(credentials, false);
        this.router.navigate(['/dashboard'], { replaceUrl: true });
      }, error => {
        this.error = error;
      });
      
  }
*/
  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]    });
  }

}
