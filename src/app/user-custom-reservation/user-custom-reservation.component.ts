import { UsersService } from './../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from './../services/dashboard.service';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-custom-reservation',
  templateUrl: './user-custom-reservation.component.html',
  styleUrls: ['./user-custom-reservation.component.scss']
})
export class UserCustomReservationComponent implements OnInit {

  loggedInInfo:any
  constructor(private authService:AuthService, private usersService:UsersService, private fb:FormBuilder , private router:Router) {
    this.authService.loggedInInfo.subscribe((loggedInState)=>{
      this.loggedInInfo = loggedInState
    })
   }

  reserveModelForm= this.fb.group({
    modelType : ['',[Validators.required]],
    ageCategory:['',[Validators.required]],
    modelPicture : ['',[Validators.required]],
  })

  imgPath:string = ''
  imgUrl:string = ''

  ngOnInit(): void {
    if(!this.loggedInInfo.isLoggedIn){
      this.router.navigate(['/signin'])
    }
  }
  // get form values
  get modelType(){
    return this.reserveModelForm.get('modelType')
  }
  get ageCategory(){
    return this.reserveModelForm.get('ageCategory')
  }
  get modelPicture(){
    return this.reserveModelForm.get('modelPicture')
  }
  // get image path
  selectedImg($event:any){
    this.imgPath = $event.target.files[0]
  }

  // add model
  reserveModel(){
    // this.uploadImg()
    const newModel = {
      clientInfo:{
        clientId:this.loggedInInfo.currentUserId
      },
      modelType:this.modelType?.value,
      ageCategory:this.ageCategory?.value,
      selledQuantity:0,
      rateOut1:0,
      rateOut2:0,
      rateOut3:0,
      rateOut4:0,
      rateOut5:0,
      type:'new'
    }
    this.usersService.reserveNewModel(newModel,this.imgPath)
    this.reserveModelForm.reset()

    this.router.navigate(["/user_access/home"])

  }



}
