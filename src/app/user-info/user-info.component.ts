import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  //
  @ViewChild('phoneInput') PhoneInput!:ElementRef;
  @ViewChild('PassInput') passInput!:ElementRef;
  @ViewChild('confirmPassInput') confirm!:ElementRef;

  handleClear(){
    // clearing the value
    this.PhoneInput.nativeElement.value = '';
    this.passInput.nativeElement.value = '';
    this.confirm.nativeElement.value = '';

  }

  //
  UserInfoForm= this.fb.group({
    phone : new FormControl('',[Validators.required,Validators.minLength(11)]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:[''],
  },{validator:[ConfirmPasswordValidator]});

  get phone(){
    return this.UserInfoForm.get('phone')
  }
  get password(){
    return this.UserInfoForm.get('password')
  }
}

export function ConfirmPasswordValidator(control:AbstractControl)
{
    console.log('entered')
    const password= control.get('password');
    const confirmPassword= control.get('confirmPassword');

    if(password?.pristine ||confirmPassword?.pristine)
    {
        return null;
    }

     else
     {
        return password && confirmPassword &&password.value !== confirmPassword.value ?{'misMatch':true} :null;

     }

}
