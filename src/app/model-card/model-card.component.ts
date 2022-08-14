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
  rateValue: number = 0;
  flag: boolean = false;
  loggedInInfo: any;
  constructor(private authService: AuthService, private usersService: UsersService, private router: Router) {
    this.authService.loggedInInfo.subscribe((loggedInState) => {
      this.loggedInInfo = loggedInState
    })
  }

  ngOnInit(): void {
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
        modelInfo['rateOut'+ this.rateValue]++
        this.usersService.updateModel(modelInfo);
        this.flag = false;
      }
      else {
        this.flag = false;
        this.rateValue = 0
      }
    })

  }
}
