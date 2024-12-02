import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from './setting-routing.module';

import { SettingPage } from './setting.page';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // เพิ่มเส้นทางอื่น ๆ ตามต้องการ
];
@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPageRoutingModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),

  ],
  
  exports: [RouterModule],
  declarations: [SettingPage],
})
export class SettingPageModule {}
