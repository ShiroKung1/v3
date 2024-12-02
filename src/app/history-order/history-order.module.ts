import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { HistoryOrderPageRoutingModule } from './history-order-routing.module';

import { HistoryOrderPage } from './history-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryOrderPageRoutingModule,

    
  ],
  declarations: [HistoryOrderPage],
  exports: [RouterModule]
})
export class HistoryOrderPageModule {}
