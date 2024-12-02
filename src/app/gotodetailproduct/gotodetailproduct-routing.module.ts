import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GotodetailproductPage } from './gotodetailproduct.page';

const routes: Routes = [
  {
    path: '',
    component: GotodetailproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GotodetailproductPageRoutingModule {}
