import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router, CanActivate } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Credential } from './model/Credential';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { RequestOptions } from '../../../node_modules/@angular/http';
//import 'rxjs/add/operator/do';
export interface login {
  // Customize received credentials here
  username: string;
  password: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Accept':  'application/json',
    'Content-Type':  'application/json',
  })
};

const credentialKey = 'credentials';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  extractData(arg0: any): any {
    console.log(arg0);
  }

  private _credential: Credential | null;
  private baseUrl = 'http:\\localhost:8080\\otmrest';

  constructor(private http: HttpClient, private router: Router) {
    const savedCredentials = sessionStorage.getItem(credentialKey) || localStorage.getItem(credentialKey);
    if (savedCredentials) {
      this._credential = JSON.parse(savedCredentials);
    }
  }

  login(credential: Credential) {
    //context.remember=false;
    console.info('inside login Auth S');
    console.info(credential);
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions();
    // options.headers["Content-Type"] = "application/json";
    debugger;

    console.info(JSON.stringify(credential));
    return this.http.post('http://localhost:8081/otmrest/login', JSON.stringify(credential), httpOptions);
    // return this.http.post<Credential>('http://localhost:8081/otmrest/login',
    //   credential, httpOptions)
    //   .subscribe(credential => {
        // console.log(credential);
    //     this.setCredentials(credential, false);
    //     console.log('Login Succes full');
    //   }, error => {
    //     console.log(error);
    //   });
  }

  /**
   * Logs out the user and clear credentials.
   * @return {Observable<boolean>} True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.setCredentials();
    return of(true);
  }

  /**
   * Checks is the user is authenticated.
   * @return {boolean} True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this._credential;
  }

  /**
   * Gets the user credentials.
   * @return {Credentials} The user credentials or null if the user is not authenticated.
   */
  get credentials(): Credential | null {
    return this._credential;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param {Credentials=} credentials The user credentials.
   * @param {boolean=} remember True to remember credentials across sessions.
   */
  private setCredentials(credentials?: Credential, remember?: boolean) {
    this._credential = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialKey);
      localStorage.removeItem(credentialKey);
    }

  }

}
