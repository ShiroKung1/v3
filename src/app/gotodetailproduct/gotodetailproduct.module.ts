import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GotodetailproductPageRoutingModule } from './gotodetailproduct-routing.module';

import { GotodetailproductPage } from './gotodetailproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GotodetailproductPageRoutingModule
  ],
  declarations: [GotodetailproductPage]
})
export class GotodetailproductPageModule {}
