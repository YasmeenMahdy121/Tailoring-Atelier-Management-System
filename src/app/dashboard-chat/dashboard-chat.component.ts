import { Validators, FormBuilder } from '@angular/forms';
import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-chat',
  templateUrl: './dashboard-chat.component.html',
  styleUrls: ['./dashboard-chat.component.scss']
})
export class DashboardChatComponent implements OnInit {

  constructor(private dashboardServices:DashboardService,  private fb:FormBuilder) { }
  term:any=""
  currentUserId:any
  userChats:any = {}
  usersIds:any = []
  currentChat:any = []
  currentUser:any = ''
  chatLength:number = 0
  chatForm = this.fb.group({
    message:['',[Validators.required]]
   })
  getAllClients(){
    this.dashboardServices.getAllClients().subscribe((clients)=>{
      this.userChats={}
      this.usersIds = []
      this.chatLength = 0
      clients.forEach((client)=>{
        let u:any = client.payload.doc.data()
        this.getUserChat(u)
        this.usersIds.push(u.clientId)
      })

   },(err)=>{
      console.log(err);

   })
  }
  getUserChat(client:any){
    this.dashboardServices.getUserChat(client.clientId).subscribe((userMessages)=>{
      let messages:any=[]
      // this.chatLength--
      userMessages.forEach((message:any)=>{
        messages.push(message.payload.doc.data())
      })
      // if(this.userChats[client.clientId]?.userChat.legth){
      //     this.chatLength++
      // }
      this.userChats[client.clientId] = {
        userId:client.clientId,
        userName:client.name,
        userChat:messages
      }
   },(err)=>{
      console.log(err);
   })
  }
  getCurrentChat(userId:any){
    this.currentUserId = userId
    this.dashboardServices.getUserChat(userId).subscribe((userMessages)=>{
      this.currentChat = []
      userMessages.forEach((message:any)=>{
        let msg:any = message.payload.doc.data()
        msg.type='old'
        this.currentChat.push(msg)
      })
   })
   this.dashboardServices.updateUserChat(userId)
   this.currentUser = this.userChats[userId].userName
  }
  sendMessage(message:any){
    console.log(this.currentUserId)
    this.dashboardServices.sendMessage(this.currentUserId, message)
    this.chatForm.reset()
  }

  ngOnInit(): void {
    this.getAllClients()
    // this.getUsersChats()
  }

}
