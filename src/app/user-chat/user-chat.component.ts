import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent implements OnInit {
flag:boolean=false
  constructor() {
    // this.chating()
  }

  changFlag()
  {
    this.flag=!this.flag
  }

  chating() {

    $('#live-chat header').on('click', function() {
  
      $('.chat').slideToggle(300, 'swing');
      $('.chat-message-counter').fadeToggle(300, 'swing');
  
    });
  
    $('.chat-close').on('click', function(event:any) {
  
      event.preventDefault();
      $('#live-chat').fadeOut(300);
  
    });
  
  }
  ngOnInit(): void {

  }

}
