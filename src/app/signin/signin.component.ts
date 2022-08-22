import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor( private router: Router, private fb:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
  }

  sgininForm= this.fb.group({
    email : ['',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    password : ['',[Validators.required,Validators.minLength(8)]],
    isadmin:[false],
  })

  get email(){
    return this.sgininForm.get('email')
  }

  get user(){
    return this.sgininForm.controls
  }

  get password(){
    return this.sgininForm.get('password')
  }
  get isAdmin(){
    return this.sgininForm.get('isadmin')
  }
  btnClick= () =>{
    this.router.navigateByUrl('/registration');
  };

  onSubmit() {
    if(this.isAdmin?.value){
      if(/^\w+([\.-]?\w+)*(\.MrTailorAdmin)@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email?.value?this.email?.value:'')){
        this.adminSignIn()
      }
      else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text: 'هذا الشكل لا ينطبق على الادمن',
        })

      }
    }
    else{
      this.userSignIn()
    }
  }

  adminSignIn(){
   
    this.authService.login(this.email?.value, this.password?.value, true)
  }
  userSignIn(){
    
    this.authService.login(this.email?.value, this.password?.value, false)
  }


}
