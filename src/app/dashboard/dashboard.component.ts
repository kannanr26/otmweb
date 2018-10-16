import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';
import { Router } from '@angular/router';
import {Customer} from '../core/model/customer';
import {ClientService} from '../core/client.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[AuthenticationService]
})
export class DashboardComponent implements OnInit {
  isLoading: boolean;
  isLogin: boolean;
  isAdmin: boolean;
  customerList :Customer[];

  constructor(private authenticationService :AuthenticationService,private clientServies :ClientService, private router: Router) { 
    
    if(authenticationService.isAuthenticated){
      this.isLogin=true;
      if(authenticationService.credentials.admin){
        this.isAdmin=true;
      }
      else
      this.isAdmin=false;
            
    }else{
      this.router.navigate(['/login'], { replaceUrl: true });
      this.isLogin=false;
    }
  }

  ngOnInit() {
    this.isLoading=true;
    this.clientServies
    .getCustomer()
    .subscribe((data: Customer[]) => {
      this.isLoading=false;
      this.customerList = data;
  });
  this.isLoading=false;
  console.info(this.customerList);
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }
}
