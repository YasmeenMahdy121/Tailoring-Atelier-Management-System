import { UsersService } from './../services/users.service';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AbstractControl } from "@angular/forms";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit , AfterViewInit{
  loggedInInfo:any
  userData:any

  constructor(private fb:FormBuilder, private authService:AuthService, private userService: UsersService) {
    this.authService.loggedInInfo.subscribe((loggedInState)=>{
      this.loggedInInfo = loggedInState
    })
    this.authService.getUserInfo(this.loggedInInfo.currentUserId,this.loggedInInfo.isAdmin).subscribe((userInfo)=>{
      this.userData = userInfo.payload.data()
      // console.log(this.userData)
    })
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {}


  //
  UserInfoForm= this.fb.group({
    phone : new FormControl('',[Validators.required,Validators.minLength(11)]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:[''],
  });

  get phone(){
    return this.UserInfoForm.get('phone')
  }
  get password(){
    return this.UserInfoForm.get('password')
  }
  upDateUserInfo(){
    let Data={
      phone : this.phone?.value ? this.phone?.value : this.userData.phone,
      password: this.password?.value ? this.password?.value : this.userData.password
    }
    this.userService.updateUserInfo(Data,this.userData.clientId);
    this.UserInfoForm.reset()

  }

}
