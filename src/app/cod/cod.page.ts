import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cod',
  templateUrl: './cod.page.html',
  styleUrls: ['./cod.page.scss'],
})
export class CodPage implements OnInit {

  constructor(private http: HttpClient) { }
  selectedFile: File | null = null;



  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      // ดำเนินการกับไฟล์ เช่น การอัปโหลดไปยังเซิร์ฟเวอร์
      this.uploadFile(this.selectedFile);
    } console.log('ข้อมูลที่อยู่:', this.address);
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    // ตัวอย่างการใช้ HttpClient อัปโหลดไฟล์
    // ต้องติดตั้ง HttpClientModule ใน app.module.ts และ import เข้ามาใช้งาน
    this.http.post('https://example.com/upload', formData).subscribe(response => {
      console.log('ไฟล์อัปโหลดสำเร็จ', response);
    }, error => {
      console.error('ข้อผิดพลาดในการอัปโหลดไฟล์', error);
    });
  }
  ngOnInit() {
  }
  address = {
    name: '',
    street: '',
    city: '',
    province: '',
    zipcode: ''
  };

}
