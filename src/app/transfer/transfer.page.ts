import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {
  selectedFile: File | null = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  address = {
    name: '',
    street: '',
    city: '',
    province: '',
    zipcode: ''
  }; onSubmit() {
    if (this.selectedFile) {
      // ดำเนินการกับไฟล์ เช่น การอัปโหลดไปยังเซิร์ฟเวอร์
      this.uploadFile(this.selectedFile);
    } console.log('ข้อมูลที่อยู่:', this.address);
  }
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);


}
}