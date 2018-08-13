import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router, CanActivate } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

export interface Credentials {
  // Customize received credentials here
  username: string;
  admmin?:boolean;
  token: string;
}

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

const credentialsKey = 'credentials';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _credentials: Credentials | null;
  private baseUrl='http:\\localhost:8080\\otmrest';

  constructor(private http: HttpClient, private router: Router) {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }
login(context: LoginContext): Observable<Credentials> {
    // Replace by proper authentication call

/*

addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
   .pipe(
     catchError(this.handleError('addHero', hero))
   );
 }
  getHeroes (): Observable<Hero[]> {
 return this.http.get<Hero[]>(this.heroesUrl)
   .pipe(
     catchError(this.handleError('getHeroes', []))
   );
 }
*/


this
.http
.post(`${this.baseUrl}/login`, context)
  .subscribe(res => 
    console.log('Done')
    //this.setCredentials(data, context.remember);
     //return of(data);

  );



    const data = {
      username: context.username,
      token: '123456'
    };
    context.remember=false;
    this.setCredentials(data, context.remember);
    return of(data);
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
    return !!this._credentials;
  }

  /**
   * Gets the user credentials.
   * @return {Credentials} The user credentials or null if the user is not authenticated.
   */
  get credentials(): Credentials | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param {Credentials=} credentials The user credentials.
   * @param {boolean=} remember True to remember credentials across sessions.
   */
  private setCredentials(credentials?: Credentials, remember?: boolean) {
    this._credentials = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }

  }

}
