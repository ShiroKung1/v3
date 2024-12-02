import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private U:NavController,private X:NavController) {}
  detail(){
    this.U.navigateRoot('/detail')
  }
  product(){
    this.U.navigateRoot('/detail-product')
  }
  his(){
    this.U.navigateRoot('/history-order')
  }
  sets(){
    this.X. navigateForward('/product')
  }
  pro(){
    this.U.navigateRoot('/profile')
  }
  details(){
    this.U.navigateForward('/detail')
  }
}
