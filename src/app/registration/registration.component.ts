import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  registrationForm= new FormGroup({
    userName : new FormControl('',[Validators.required,Validators.pattern(/^[\u0600-\u06FF]{2,} [\u0600-\u06FF]{2,}$/)]),
    email : new FormControl('',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    phone : new FormControl('',[Validators.required,Validators.minLength(11),Validators.pattern(/^(01)(0|1|2|5)[0-9]{8}$/)]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)]),
    isadmin: new FormControl(false),
  })

  get userName(){
    return this.registrationForm.get('userName')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get phone(){
    return this.registrationForm.get('phone')
  }
  get password(){
    return this.registrationForm.get('password')
  }
  get user(){
    return this.registrationForm.controls
  }
  get isAdmin(){
    return this.registrationForm.get('isadmin')
  }
  onSubmit() {
    if(this.isAdmin?.value){
      if(/^\w+([\.-]?\w+)*(\.MrTailorAdmin)@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email?.value?this.email?.value:'')){
        this.adminRegister()
      }
      else{
        alert('')
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text: 'هذا الشكل لا ينطبق على الادمن',
        })
      }
    }
    else{
      this.clientRegister()
    }
  }
  adminRegister(){
    let admin = {
      name:this.userName?.value,
      email:this.email?.value,
      phone:this.phone?.value,
      password:this.password?.value
    }
    console.log('hi admin')
    this.authService.register(admin, true);
  }
  clientRegister(){
    let client = {
      name:this.userName?.value,
      email:this.email?.value,
      phone:this.phone?.value,
      password:this.password?.value
    }
    this.authService.register(client, false);
    console.log('hi client')
  }

}
