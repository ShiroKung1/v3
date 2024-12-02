import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {
  constructor(
    public http: HttpClient,
  ) { }
datadetail:any=[];

  // ฟังก์ชันการเพิ่มที่ส่งไปยัง api
  addmenu(data: any) {
    console.log("ข้อมูลที่ส่งไปยัง api", data);
    return this.http.post('http://localhost/menu/insert.php', data);
  }
  editData(dataEdit: any){
    return this.http.post('http://localhost/class2-4/api/update.php', dataEdit);
  }
 //ฟังชั้นดึงข้อมูลมาจาก API
  listMenber(){
    return this.http.get('http://localhost/menu/listmenu_order.php');
  }
}