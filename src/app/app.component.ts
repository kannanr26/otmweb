import { Component } from '@angular/core';
import { AuthenticationService } from '../app/core/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  isLogin: boolean;
  constructor(private authenticationService :AuthenticationService) {
    if(authenticationService.isAuthenticated){
      this.isLogin=true;
    }else
      this.isLogin=false;
   }


}
