import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], 
  providers:[AuthenticationService]

})
export class HomeComponent implements OnInit {
  isLogin: boolean;
  constructor(private authenticationService :AuthenticationService) {
    if(authenticationService.isAuthenticated){
      this.isLogin=true;
    }else
      this.isLogin=false;
   }

  ngOnInit() {
  }

}
