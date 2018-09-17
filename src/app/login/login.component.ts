import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Credential } from '../core/model/Credential';
import { AuthenticationService } from '../core/authentication.service';
import { ClientService } from '../core/client.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;
  loginForm: FormGroup;
  isLoading = false;
  credentials: Credential;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private clientService: ClientService) {
    this.createForm();
  }

  ngOnInit() { }
  login() {
    this.isLoading = true;
    this.authenticationService.login(this.loginForm.value);

    if (this.authenticationService.isAuthenticated && this.authenticationService.isLogin) {
      this.isLoading = false;
      this.credentials = this.authenticationService.credentials;
      
       console.info('inside login component'+this.credentials);

      if (this.credentials.isProfileFilled)
        this.router.navigate(['/dashboard'], { replaceUrl: true });
      else
        this.router.navigate(['/dashboard'], { replaceUrl: true });
    }
    else {
      this.isLoading = false;
      this.router.navigate(['/login'], { replaceUrl: true });
    }
  };
  private createForm() {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
