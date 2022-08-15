import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-feedback-reviews',
  templateUrl: './feedback-reviews.component.html',
  styleUrls: ['./feedback-reviews.component.scss']
})
export class FeedbackReviewsComponent implements OnInit {

  allReviews :any[]=[];
  constructor(private userService : UsersService) {
    this.userService.getReviews().subscribe((review)=>{
      this.allReviews=[]
      review.forEach((e)=>{
       this.allReviews.push(e.payload.doc.data())
      })
      console.log(this.allReviews);
    },(err)=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

}
