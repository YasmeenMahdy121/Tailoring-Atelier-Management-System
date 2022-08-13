import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private mrTailorStorage: AngularFireStorage, private mrTailorDB:AngularFirestore) { }

  // get all Models in firebase
  getAllModels()
  {
   let ref= this.mrTailorDB.collection('/models', ref =>    ref.orderBy('date'))
    return ref.snapshotChanges()
  }

  // add new model
  imgUrlP1:string = 'https://firebasestorage.googleapis.com/v0/b/iti-graduation-project-d5b5e.appspot.com/o'
  imgUrlP2:string = '?alt=media&token=349ee2d1-e9f5-4794-943a-3ebe9d0a7a95'
  reserveNewModel(newModel:any,path:string){
    const imgUrl = `/files${Math.random()}${path}`
    this.mrTailorStorage.upload(imgUrl,path).then(()=>{
      let model ={
        ...newModel,
        img:this.imgUrlP1+imgUrl+this.imgUrlP2,
       }
       this.mrTailorDB.collection("/mrTailorClients").doc(model.clientInfo.clientId).snapshotChanges().subscribe((data)=>{
        model = {
          ...model,
          clientInfo:data.payload.data(),
          reservationDate: new Date().getTime(),
          state: 'pending'
        }
          model.modelId =this.mrTailorDB.createId();
          this.mrTailorDB.collection("pending").doc(model.modelId).set(model)
          this.mrTailorDB.collection(`/usersModels/${model.clientInfo.clientId}/userModels`).doc(model.modelId).set(model)
       })

    }

    )
  }
  // get model by id
  getModelById(modelID:any){
    let ref = this.mrTailorDB.collection("/models").doc(modelID)
    return ref.snapshotChanges()
  }
  // send user message to firebase
  sendMessage(currentUserId:any, message:any){
    let messageObj = {
      from:'user',
      message,
      date:new Date().getTime(),
      type:'new'
    }
    let id =this.mrTailorDB.createId();
    this.mrTailorDB.collection(`/chats/${currentUserId}/userChat`).doc(id).set(messageObj)
  }

  getUserMessages(currentUserId:any):Observable<any>{
     return this.mrTailorDB.collection(`/chats/${currentUserId}/userChat`, ref =>    ref.orderBy('date')).snapshotChanges()
  }

}
