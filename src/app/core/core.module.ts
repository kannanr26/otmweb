import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import {LayoutModule} from './layout/layout.module';
import {SharedModule} from './shared/shared.module';
@NgModule({
  
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [
  ],
  exports:[LayoutModule,SharedModule],
  providers: []
})
export class CoreModule {
  constructor(){}
 }
