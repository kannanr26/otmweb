import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[AuthenticationService]
})
export class HeaderComponent implements OnInit {

  private isLogin : boolean ;
  constructor(private authenticationService :AuthenticationService) { 
    if(authenticationService.isAuthenticated){
      this.isLogin=true;
    }else
      this.isLogin=false;
  }

  ngOnInit() {
  }


}
