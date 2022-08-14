import { AuthService } from './../services/auth.service';
import { UsersService } from './../services/users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss']
})
export class ModelDetailsComponent implements OnInit {
  rateValue:number=0;
  modelID:any
  modelDetails:any
  reviewsNum:number=0
  loggedInInfo:any
  constructor(private authService:AuthService, private usersService:UsersService, private activatedRoute:ActivatedRoute) {
    this.authService.loggedInInfo.subscribe((loggedInState)=>{
      this.loggedInInfo = loggedInState
    })
  }

  ngOnInit(): void {
    // get active url params
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.modelID=params.get('id');
      this.getModelById(this.modelID)
    })
  }

   // get model by id
   getModelById(modelID:any){
    this.usersService.getModelById(modelID).subscribe((model)=>{
      this.modelDetails = model.payload.data()
      let base =  (this.modelDetails.rateOut1+this.modelDetails.rateOut2+this.modelDetails.rateOut3+this.modelDetails.rateOut4+this.modelDetails.rateOut5)
      if(base){
        this.rateValue=Math.round(((this.modelDetails.rateOut1*1)+(this.modelDetails.rateOut2*2)+(this.modelDetails.rateOut3*3)+(this.modelDetails.rateOut4*4)+(this.modelDetails.rateOut5*5))/base)
      }
      this.reviewsNum = this.modelDetails.rateOut1+this.modelDetails.rateOut2+this.modelDetails.rateOut3+this.modelDetails.rateOut4+this.modelDetails.rateOut5
    },(err)=>{
      console.log(err.message)
    })
  }

    // reserve model
    reserveModel(){
      const newModel = {
        clientInfo:{
          clientId:this.loggedInInfo.currentUserId
        },
        ...this.modelDetails
      }
      this.usersService.reserveExistModel(newModel)
      alert('تم الحجز')
      // this.router.navigate(["/user_access/home"])

    }

}
