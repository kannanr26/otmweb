import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[AuthenticationService]
})
export class DashboardComponent implements OnInit {
  isLoading: boolean;
  isLogin: boolean;

  constructor(private authenticationService :AuthenticationService,private router: Router) { 
    if(authenticationService.isAuthenticated){
      this.isLogin=true;
    }else
      this.isLogin=false;
  }

  ngOnInit() {
    this.isLoading=true;



    this.isLoading=false;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }
}
