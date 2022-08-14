import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUserChat'
})
export class SearchUserChatPipe implements PipeTransform {

  transform(userIds:any[],userChats:any , term:string): any {
    if(!term) {
    return userIds;
    }
    return userIds?.filter(function(userId:any) {
      return userChats[userId]?.userName.includes(term);
    })
  }

}
