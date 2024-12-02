import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.page.html',
  styleUrls: ['./history-order.page.scss'],
})
export class HistoryOrderPage implements OnInit {
  @ViewChild('popover') popover: {event: Event;} |
  undefined;
  orders = [
    { id: 1, date: '2024-09-01', total: 1200 },
    { id: 2, date: '2024-09-05', total: 2500 },
    { id: 3, date: '2024-09-10', total: 1800 }
  ];
  constructor(private M:NavController,) { }
  isOpen = false;

  ngOnInit() {
  }
  presentPopover(e: Event) {
    this.isOpen = true;
  }
  items=[
    {
      id: 1,
      name:'น้ำส้ม',
      price:'60บาท',
      DataTransfer: 'วันที่ 14/08/2567',
      imageURL:'assets/img/download (9).jfif',
    },
    {
      id: 2,
      name:'น้ำฝรั่ง',
      price:'60บาท',
      DataTransfer: 'วันที่ 11/09/2567',
      imageURL:'assets/img/download (2).jfif',
    },{
      id: 3,
      name:'น้ำเสาวรส',
      price:'60บาท',
      DataTransfer: 'วันที่ 13/09/2667',
      imageURL:'assets/img/download (1).jfif',
    },{
      id: 4,
      name:'น้ำกระชาย',
      price:'60บาท',
      DataTransfer: 'วันที่ 14/09/2567',
      imageURL:'assets/img/download (3).jfif',
      amount: '20',
    }
  ];A=[
    {
      id:1,
      names:'น้ำเสาวรส',
      prices:'60บาท',
      DataTransfers: 'วันที่ 13/08/2667',
      amount: '20',
    },
  ]
  B=[
    {
      id:3 ,
      named:'น้ำฝรั่ง',
      priced:'60บาท',
      DataTransfersd: 'วันที่ 11/09/2567',
      amountd: '20',
    }
  ]
}
