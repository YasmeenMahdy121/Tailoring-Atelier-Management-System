import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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
        alert('not admin format')
      }
    }
    else{
      this.userSignIn()
    }
  }

  adminSignIn(){
    console.log('hi admin')
    this.authService.login(this.email?.value, this.password?.value, true)
  }
  userSignIn(){
    console.log('hi user')
    this.authService.login(this.email?.value, this.password?.value, false)
  }


}
