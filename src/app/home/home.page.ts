import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  isModalOpen = false;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  showToast: boolean = false;
  toastMessage: string = '';

  showAlert: boolean = false;
  alertMessage: string = '';

  constructor(private D : NavController ,
    private alertController: AlertController,
    private toastController: ToastController,
    public router:Router
  ) {}
  detail(){
    this.D.navigateForward('/detail')
  };
  openSignUpModal() {
    this.isModalOpen = true;
  }

  // ฟังก์ชันปิด Modal
  closeSignUpModal() {
    this.isModalOpen = false;
  }

  // ฟังก์ชันจัดการการสมัครสมาชิก
  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.alertMessage = 'Passwords do not match!';
      this.showAlert = true;
    } else {
      // เรียกใช้ API หรือจัดการข้อมูลการสมัครสมาชิก
      console.log('Sign Up with', this.email, this.password);

      // แสดง Toast เมื่อสมัครสมาชิกสำเร็จ
      this.toastMessage = 'Signup successful!';
      this.showToast = true;

      // ปิด Modal หลังจากสมัครเสร็จ
      this.closeSignUpModal();

      // ล้างข้อมูลฟอร์ม
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
    }
  }

  // ฟังก์ชันจัดการเมื่อ Modal ถูกปิด
  onWillDismiss(event: any) {
    this.isModalOpen = false;
  } onLogin() {
    if (!this.email || !this.password) {
      this.alertMessage = 'Please enter both email and password!';
      this.showAlert = true;
    } else {
      // เชื่อมต่อกับ API เพื่อตรวจสอบข้อมูลการเข้าสู่ระบบ (ถ้ามี)
      console.log('Login with', this.email, this.password);

      // แสดงข้อความสำเร็จ (ในกรณีที่การเข้าสู่ระบบสำเร็จ)
      this.toastMessage = 'Login successful!';
      this.showToast = true;

      // เคลียร์ข้อมูลหลังจากเข้าสู่ระบบ
      this.email = '';
      this.password = '';
    }
  }

  SignUp(){
  this.D.navigateForward('/sign-up');
 }

}
