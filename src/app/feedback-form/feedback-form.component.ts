import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  loggedInInfo:any
  userName:any
  constructor(private userService:UsersService, private authService:AuthService) {
    this.authService.loggedInInfo.subscribe((loggedInState)=>{
      this.loggedInInfo = loggedInState
    })
    this.authService.getUserInfo(this.loggedInInfo.currentUserId,this.loggedInInfo.isAdmin).subscribe((userInfo)=>{
      this.userName = userInfo
    })
  }

  @ViewChild('reviewContent') txtArea! : ElementRef;

  commentTime:any;
  //  add reviews to fireBase
  addReview(reviewContent:string){
    // this.commentTime = new Date();
    this.commentTime = new Date();
    //  clear text area after added
    this.txtArea.nativeElement.value ='';
    //  object of storing data
    let ourReview = {reviewContent, UserName:this.userName.payload.data().name, commentDate : this.commentTime};
    // call the 'addReviews' function to add the previous object to fire base
    this.userService.addReviews(ourReview).then(res =>{
      console.log(res);
    }).catch(error=>{
      console.log(error);
    })
  }
  ngOnInit(): void {
  }

}
