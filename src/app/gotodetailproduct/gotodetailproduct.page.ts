import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-gotodetailproduct',
  templateUrl: './gotodetailproduct.page.html',
  styleUrls: ['./gotodetailproduct.page.scss'],
})
export class GotodetailproductPage implements OnInit {
  txtid: any;
  txtmenu:any;
  txtprice:any;
  txtdetail: any;

  id:any;
  menu:any;
  price:any;
  detail:any;
  constructor(public dataapi: DataapiService, public router: Router) {}

  ngOnInit() {
  }

  addmenu(){
   let data = {
    id:this.txtid,
    menu:this.txtmenu,
    price:this.txtprice,
    detail:this.txtdetail,
   }
   this.dataapi.addmenu(data).subscribe({
    next: (res: any) => {
      console.log("ข้อมูลถูกเพิ่ม", res);
    },
    error: (err: any) => {
      console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล", err);
    },
    complete: () => {
      console.log("การทำงานเสร็จสมบูรณ์");
    }
  });
}
}