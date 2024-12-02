import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private S : NavController) { }

  ngOnInit() {
  }

  set(){
    this.S.navigateRoot('/product');
  }
  pro(){
    this.S.navigateRoot('/profile')
  }
}
