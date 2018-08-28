import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router, CanActivate } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Credential } from './model/Credential';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { RequestOptions } from '../../../node_modules/@angular/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept':  'application/json',
    'Content-Type':  'application/json',
  })
};
const baseURL='http://localhost:8081/otmrest/login';
const credentialKey = 'credentials';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private _credential: Credential | null;
  public isLogin :boolean ;
  
  constructor(private http: HttpClient, private router: Router) {
    const savedCredentials = sessionStorage.getItem(credentialKey) || localStorage.getItem(credentialKey);
    if (savedCredentials) {
      this.isLogin= false;
      this._credential = JSON.parse(savedCredentials);
    }
  }

  login(credential: Credential) {
  console.info('inside login Client service ::::: Json :: '+JSON.stringify(credential));
    return this.http.post<Credential>(baseURL,
    JSON.stringify(credential), httpOptions)
       .subscribe(credential => {
         console.log('After return::::::'+ credential);
         this.isLogin= true;
         this.setCredentials(credential, false);
         console.log('Login Succes full');
       }, error => {
        this.isLogin= false;
         if(error.status==401 || error.status==402 || error.status==403){
          console.info(400);
       
         } else if(error.status==500 || error.status==501 || error.status==502){
         }
         console.info(error);
         this.setCredentials(null, false);
      
       });
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
    return (!!this.credentials && this.isLogin);
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
  public setCredentials(credentials?: Credential, remember?: boolean) {
    this._credential = credentials || null;

    if (this._credential !=null && this.isLogin) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialKey, JSON.stringify(this._credential));
    } else {
      this.isLogin=false;
      sessionStorage.removeItem(credentialKey);
      localStorage.removeItem(credentialKey);
    }

  }

}
