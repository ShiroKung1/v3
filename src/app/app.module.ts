import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Import HttpClientModule (สำคัญ!)
import { HttpClientModule } from '@angular/common/http';

// Service ของคุณ
import { provideHttpClient } from '@angular/common/http';
import { DataapiService } from './dataapi.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule, // เพิ่ม HttpClientModule ที่นี่
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataapiService,provideHttpClient() // เพิ่ม service ของคุณที่นี่
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
