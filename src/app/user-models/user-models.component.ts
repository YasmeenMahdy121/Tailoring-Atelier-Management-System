import { DashboardService } from './../services/dashboard.service';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-models',
  templateUrl: './user-models.component.html',
  styleUrls: ['./user-models.component.scss']
})
export class UserModelsComponent implements OnInit {
  loggedInInfo:any
  userModels:any
  allModelsData :any[]=[];

  constructor(private userService:UsersService,private authService:AuthService, private dashBoardService:DashboardService) {
    this.authService.loggedInInfo.subscribe((loggedInState)=>{
      this.loggedInInfo = loggedInState
      // console.log(this.loggedInInfo.currentUserId)
      this.getAllModels(this.loggedInInfo.currentUserId)
    })
  }
  getAllModels(userId:any){
    this.userService.getCurrentUsersModels(userId).subscribe((userModel)=>{
      this.allModelsData=[];
      this.userModels = userModel;
      this.userModels.forEach((e:any)=>{
        let model = e.payload.doc.data()
        let base =  (model.rateOut1+model.rateOut2+model.rateOut3+model.rateOut4+model.rateOut5)
        if(base){
          model.rate = Math.round(((model.rateOut1*1)+(model.rateOut2*2)+(model.rateOut3*3)+(model.rateOut4*4)+(model.rateOut5*5))/base)
        }
        this.allModelsData.push(model)
        console.log(e.payload.doc.data());
      })
      // console.log(this.userModels.payload._delegate.doc._document.data.value.mapValue.fields.price);
      // console.log(this.allModelsData);
      // console.log(this.allModelsData);
      // console.log(this.allModelsData.clientInfo.);

    })
  }
  DeleteModel(userId:any,modelId:any){
    this.dashBoardService.deleteUserModel(userId,modelId);
    console.log('deleted');
    console.log(userId,modelId);
  }
  ngOnInit(): void {
  }

}
