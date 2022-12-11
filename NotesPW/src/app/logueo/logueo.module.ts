import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUPComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SignUPComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
    
  ],
  exports:
  [
  SignUPComponent   
  ]
})
export class LogueoModule { }
