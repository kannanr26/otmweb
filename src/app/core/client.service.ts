import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Customer } from './model/customer';

//import 'rxjs/add/operator/do';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ClientService {
   url:string='http://localhost:8081';
  constructor(private http:HttpClient ) { }

  login(customer :Customer){
   return  this.http.post(this.url+'\\login',customer);
  }
  registration (customer :Customer){
    return  this.http.post(this.url+'\\postcustomer',customer,httpOptions);
   }
  }
