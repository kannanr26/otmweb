import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent} from './dashboard/edit/edit.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'about', component: AboutComponent},
  { path: 'myprofile', component: MyprofileComponent},
  { path: 'dashboard', component: DashboardComponent,

  children:[
    
    { path: 'dashboard/edit', component: EditComponent},
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
