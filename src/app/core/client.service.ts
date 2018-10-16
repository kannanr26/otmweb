import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import { Customer } from './model/customer';
import { Credential } from './model/Credential';
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
   url:string='http://localhost:8081/otmrest';
  constructor(private http:HttpClient,private authenticationService: AuthenticationService ) { }

  login(credential :Credential){
     this.authenticationService.login(credential);
  }
  registration (customer :Customer){
    console.info(customer);
    return  this.http.post(this.url+'\\postcustomer',customer,httpOptions);
   }

   getProfile (){
   
    let credential=this.authenticationService.credentials;
    return  this.http.get(this.url+'\\getProfile\\'+credential.id,httpOptions);
   }
   updateProfile(customer :Customer){
    var id=this.authenticationService.credentials.id

    return  this.http.post(this.url+'\\editprofile\\'+id,customer,httpOptions);
   }

   getCustomer(){
     //this.http.options.
   let credential=this.authenticationService.credentials;
    return  this.http.get(this.url+'\\customershow\\'+credential.id,httpOptions);
   }
  }
