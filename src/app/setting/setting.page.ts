import { Component, OnInit , ViewChild} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  

  navigateToTransfer() {
    this.navCtrl.navigateForward('/transfer'); // เปลี่ยนเส้นทางไปยังหน้าการโอนเงิน
  }

  navigateToCOD() {
    this.navCtrl.navigateForward('/cod'); // เปลี่ยนเส้นทางไปยังหน้าการเก็บเงินปลายทาง
  }
  quantity: number | null = null;


  gotodetailproduct(){
    this.A.navigateForward(['/gotodetailproduct']);
  }

  constructor(
    private navCtrl:NavController,
    private router:Router ,
  private A:NavController) {
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
  ngOnInit() {}
  products = [
    {
      id: 1,
      names:'น้ำส้ม',
      price:'60บาท',
      imageURL:'assets/img/download (9).jfif',
    },
    {
      id: 2,
      name:'น้ำฝรั่ง',
      price:'60บาท',
      imageURL:'assets/img/download (2).jfif',
    },
    {
      id: 3,
      name:'น้ำเสาวรส',
      price:'60บาท',
      imageURL:'assets/img/download (1).jfif',
    },
    {
      id: 4,
      name:'น้ำกระชาย',
      price:'60บาท',
      imageURL:'assets/img/download (3).jfif',
    },
  ];



  selectProduct(product: any) {
    console.log('เลือกสินค้า: ', product);
  }

  addToCart(product: any) {
    console.log('เพิ่มสินค้าลงในตะกร้า: ', product);
  }
  onSubmit() {
    if (this.quantity !== null) {
      console.log('จำนวนที่กรอก:', this.quantity);
      // ดำเนินการต่อกับข้อมูลที่ได้รับ เช่น ส่งไปยังเซิร์ฟเวอร์หรือเก็บในฐานข้อมูล
    } else {
      console.error('กรุณากรอกจำนวน');
    }
  }


}