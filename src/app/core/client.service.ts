import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Customer } from './model/customer';
@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http:Http ) { }

  login(customer :Customer){
    let url:string='http://localhost:8080\\login';

   return  this.http.post(url,customer);
  }
}
