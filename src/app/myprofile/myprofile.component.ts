import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';
import {Customer} from '../core/model/customer';
import {Refference} from '../core/model/refference';
import { Router } from '@angular/router';
import {ClientService} from '../core/client.service';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})

  
export class MyprofileComponent implements OnInit {
  isLoading: boolean;
  isLogin: boolean;
  customer :Customer;
  error :string ;
 reff;
  
  religions = ["Hindu","Muslim","Christianity","Others"];
  years = ["1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000"];
  foodHabbits=["100% VEG"," NON VEG","Non-veg only out of home"]
  constructor( private authenticationService :AuthenticationService,private clientServies :ClientService, private router: Router) { 
    if(authenticationService.isAuthenticated){
      this.isLogin=true;
    }else
      this.isLogin=false;

      this.customer=new Customer()
  }
  ngOnInit() {
    this.isLoading=true;
    this.clientServies
    .getProfile()
    .subscribe((data: Customer) => {
      this.isLoading=false;
      this.customer = data;
      if(!this.customer.profileFilled){
       this.reff  =[new Refference(),new Refference(),new Refference(),new Refference()];
        this.customer.refference=this.reff;
      }
  }); 
  
  this.isLoading=false;
  }
  
  onUpdate(){

    this.isLoading = true;
    console.info(this.customer);

    this.clientServies.updateProfile(this.customer)
    .pipe(finalize(() => {
     this.isLoading = false;
    }))
    .subscribe(credentials => {
      this.router.navigate(['/dashboard'], { replaceUrl: true });
    }, error => {

      this.error = "";
    });

  }
  
  selectedReligion(value: String) {
    this.customer.religion===value;
  }
  
  selectedWMReligions(value: String) {
    this.customer.wmReligion===value;
  }
  selectedYear(value: number) {
    this.customer.dobYear===value;
  }
  selectedFoodHabit(value: String) {
    this.customer.foodHabit===value;

  }
  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }
}
