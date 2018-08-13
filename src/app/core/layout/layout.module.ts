import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {LayoutComponent} from './layout.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [LayoutComponent,HeaderComponent, FooterComponent],
  exports:[LayoutComponent]
})
export class LayoutModule { }
