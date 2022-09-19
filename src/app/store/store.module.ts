import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { ConfirmOrderComponent } from './pages/confirm-order/confirm-order.component';


@NgModule({
  declarations: [
    ConfirmOrderComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
