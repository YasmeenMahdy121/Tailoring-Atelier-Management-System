import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from './../services/users.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent implements OnInit {
flag:boolean=false
loggedInInfo:any
chatMessages:any[] = []
constructor(private authService:AuthService, private usersService:UsersService, private fb:FormBuilder) {
  this.authService.loggedInInfo.subscribe((loggedInState)=>{
    this.loggedInInfo = loggedInState
  })
 }

 chatForm = this.fb.group({
  message:['',[Validators.required]]
 })

  changFlag()
  {
    this.flag=!this.flag
  }
  sendMessage(message:any){
    this.usersService.sendMessage(this.loggedInInfo.currentUserId, message)
    this.chatForm.reset()
  }
  getUserMessages(){
    this.usersService.getUserMessages(this.loggedInInfo.currentUserId).subscribe((model)=>{
      this.chatMessages=[]
      model.forEach((e:any)=>{
       this.chatMessages.push(e.payload.doc.data())
      })
   })
  }
  ngOnInit(): void {
    this.getUserMessages()
  }

}
