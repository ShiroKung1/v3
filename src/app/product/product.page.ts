import { Component, OnInit , ViewChild} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {


  navigateToTransfer() {
    this.X.navigateRoot('/transfer'); // เปลี่ยนเส้นทางไปยังหน้าการโอนเงิน
  }

  navigateToCOD() {
    this.X.navigateForward('/cod'); // เปลี่ยนเส้นทางไปยังหน้าการเก็บเงินปลายทาง
  }
  quantity: number | null = null;


 As(i:any){
    this.X.navigateForward('/gotodetailproduct',{state:{i}});
}

  constructor(
    private navCtrl:NavController,
    private router:Router,
    private X:NavController ) {
      const navigation = this.router.getCurrentNavigation();
      
    
     }   

   

     @ViewChild(IonModal) modal!: IonModal;

     message = 'เเอปนี้';
     name!: string;
   
   
     onWillDismiss(event: Event) {
       const ev = event as CustomEvent<OverlayEventDetail<string>>;
       if (ev.detail.role === 'confirm') {
         this.message = `Hello, ${ev.detail.data}!`;
       }
     }

  ngOnInit() {
  }


  

}
