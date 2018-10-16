import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ClientService } from '../core/client.service';
import { Gender } from '../core/model/gender';
import { Observable } from '../../../node_modules/rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: []
})

export class RegistrationComponent implements OnInit {
  error: string;
  registrationForm: FormGroup;
  isLoading = false;
  genders = ["Male", "Female"];
  religions = ["Hindu","Muslim","Christianity","Others"];
      //selGender: Array<string>;

  /*
  createFor :Creatingfor; 
  createForingfor : typeof Creatingfor=Creatingfor; 
  createForOptions : string[];
  */
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private clientService: ClientService) {
    this.createForm();
  }
  ngOnInit() {
    this.registrationForm.controls['religion'].setValue("Hindu");
  }


  /* ngOnInit() {
     var createForOption =Object.keys(Creatingfor);
     this.createForOptions=createForOption.slice(createForOption.length/2);
   }
   parseCreateFor(value : string) {
     this.createFor = Creatingfor[value];
   }
 
   get CreateingFor(){
   return  Creatingfor;
   }
   */
  registration() {
    this.isLoading = true;
    console.info(this.registrationForm.value);
    this.clientService.registration(this.registrationForm.value)
      .pipe(finalize(() => {
        this.registrationForm.markAsPristine();
        this.isLoading = false;
      }))
      .subscribe(credentials => {
        this.router.navigate(['/login'], { replaceUrl: true });
      }, error => {

        this.error = "Enter the correct credentials";
      });
  }
  private createForm() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      religion:['',Validators.required],
      userId: ['', Validators.required],
      password: ['', Validators.required],
      contactName:['',Validators.required],
      /*rname: ['', Validators.required],
      relationship: ['', Validators.required],*/
    });
  }

  onSplitUserId(value: String) {
    var user = value.split('@');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( this.registrationForm.controls.email.value))
    {
      this.registrationForm.controls['userId'].setValue( user[0]);
    
    }else{
      this.registrationForm.controls['email'].setErrors({'incorrect': true});
    }
  }
  selectedReligions(value: String) {
    this.registrationForm.controls['religion'].setValue(value);
  }
  selectedGender(value: String) {
    this.registrationForm.controls['gender'].setValue(value);
    console.log(" Gender ::" +this.registrationForm.controls.gender.value );
    //this.gender = event;
  }
}
