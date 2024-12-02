import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  ngOnInit() { 
  }
 
  profileImage: string | ArrayBuffer | null = null;
  constructor() {}
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
    }
  }
  // ฟังก์ชันสำหรับการอัปโหลดรูปภาพ

    }
  