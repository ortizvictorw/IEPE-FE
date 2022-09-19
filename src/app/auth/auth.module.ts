import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSignInComponent } from './components/form-sign-in/form-sign-in.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    FormSignInComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
