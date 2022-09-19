import { FormComponent } from './../../components/form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';


@NgModule({
  declarations: [
    SignInComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule
  ],
})
export class SignInModule { }
