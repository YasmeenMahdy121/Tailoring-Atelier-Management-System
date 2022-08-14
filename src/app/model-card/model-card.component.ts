import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss']
})
export class ModelCardComponent implements OnInit {
  @Input() modelInfo: any;
  rateValueChanges: number = 0;
  rateValue: number = 0;
  flag: boolean = false;
  loggedInInfo: any;
  constructor(private authService: AuthService, private usersService: UsersService, private router: Router) {
    this.authService.loggedInInfo.subscribe((loggedInState) => {
      this.loggedInInfo = loggedInState
    })
  }

  ngOnInit(): void {
    let base =  (this.modelInfo.rateOut1+this.modelInfo.rateOut2+this.modelInfo.rateOut3+this.modelInfo.rateOut4+this.modelInfo.rateOut5)
      if(base){
        this.rateValue=Math.round(((this.modelInfo.rateOut1*1)+(this.modelInfo.rateOut2*2)+(this.modelInfo.rateOut3*3)+(this.modelInfo.rateOut4*4)+(this.modelInfo.rateOut5*5))/base)
      }
  }
  addRating() {
    this.flag = true;
    console.log(this.flag);
  }
  ratingDone(modelInfo: any) {
    this.usersService.getCurrentUsersModels(this.loggedInInfo.currentUserId).forEach((userModels) => {
      let isExist = false;
      userModels.forEach((userModel: any) => {
        if (modelInfo.modelId == userModel.payload.doc.data().modelId) {
          isExist = true;
        }
      })
      if (isExist) {
        modelInfo['rateOut'+ this.rateValueChanges]++
        this.usersService.updateModel(modelInfo);
        this.flag = false;
      }
      else {
        this.flag = false;
        this.rateValueChanges = 0
      }
    })

  }
}
