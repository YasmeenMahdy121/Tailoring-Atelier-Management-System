import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private mrTailorStorage: AngularFireStorage, private mrTailorDB:AngularFirestore, private router:Router) { }
  // get all Models in firebase
  getAllModels()
  {
   let ref= this.mrTailorDB.collection('/models', ref =>    ref.orderBy('date'))
    return ref.snapshotChanges()
  }

  // add new model
  imgUrlP1:string = 'https://firebasestorage.googleapis.com/v0/b/iti-graduation-project-d5b5e.appspot.com/o'
  imgUrlP2:string = '?alt=media&token=349ee2d1-e9f5-4794-943a-3ebe9d0a7a95'
  addNewModel(newModel:any,path:string){
    const imgUrl = `/files${Math.random()}${path}`
    this.mrTailorStorage.upload(imgUrl,path).then(()=>{
      let model ={
        ...newModel,
        img:this.imgUrlP1+imgUrl+this.imgUrlP2,
       }
       model.modelId =this.mrTailorDB.createId();
       let ref = this.mrTailorDB.collection("models").doc(model.modelId)
       ref.set(model)

    }

    )
  }
  // get model by id
  getModelById(modelID:any){
    let ref = this.mrTailorDB.collection("/models").doc(modelID)
    return ref.snapshotChanges()
  }
  // update model
  updateModel(updatedModel:any){
    let ref = this.mrTailorDB.collection("models").doc(updatedModel.modelId)
    ref.update(updatedModel)
    this.router.navigate(["/dashboard/atelier_models"]);
  }
  // delete model
  deleteModel(modelID:any){
    let ref = this.mrTailorDB.collection("models").doc(modelID)
    ref.delete()
    this.router.navigate(["/dashboard/atelier_models"]);
  }
  // best selling models
  bestSellingModels()
  {
   let ref= this.mrTailorDB.collection('/models', ref =>    ref.orderBy('selledQuantity','desc'))
    return ref.snapshotChanges()
  }
  // get pendding models
  getPenddingModels()
  {
   let ref= this.mrTailorDB.collection('/pending', ref =>    ref.orderBy('reservationDate'))
    return ref.snapshotChanges()
  }
  // add to confirm models
  addToConfirmModels(model:any){
    this.mrTailorDB.collection("confirmedModels").doc(model.modelId).set(model)
  }
  // update user model
  updateUserModel(model:any){
    this.mrTailorDB.collection(`/usersModels/${model.clientInfo.clientId}/userModels`).doc(model.modelId).update(model)
  }
  // delete pendding model
  deletePenddingModel(model:any){
    this.mrTailorDB.collection('pending').doc(model.modelId).delete()
  }
  getConfirmedModels()
  {
    let ref= this.mrTailorDB.collection('/confirmedModels', ref =>    ref.orderBy('confirmDate'))
    return ref.snapshotChanges()
  }

  addToModels(model:any)
  {
    this.mrTailorDB.collection("models").doc(model.modelId).set(model)
  }
  deleteConfirmModel(model:any)
  {
    this.mrTailorDB.collection('confirmedModels').doc(model.modelId).delete()
  }
  getAllClients(){
    return this.mrTailorDB.collection('mrTailorClients').snapshotChanges()
  }
  getUserChat(currentUserId:any):Observable<any>{
    return this.mrTailorDB.collection(`/chats/${currentUserId}/userChat`, ref =>    ref.orderBy('date')).snapshotChanges()
  }
  updateUserChat(userId:any){
    this.mrTailorDB.collection(`/chats/${userId}/userChat`).get().forEach((data)=>{
      data.forEach((message)=>{
        let msg:any = message.data()
        msg.type = 'old'
        this.mrTailorDB.collection(`/chats/${userId}/userChat`).doc(message.id).update(msg)
      })
    })
  }
    // send user message to firebase
    sendMessage(currentUserId:any, message:any){
      let messageObj = {
        from:'admin',
        message,
        date:new Date().getTime(),
        type:'new'
      }
      let id =this.mrTailorDB.createId();
      this.mrTailorDB.collection(`/chats/${currentUserId}/userChat`).doc(id).set(messageObj)
    }
}
