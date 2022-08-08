import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private mrTailorStorage: AngularFireStorage, private mrTailorDB:AngularFirestore, private router:Router) { }

  // upload image to fire storage
  uploadImg(path:string){
    const imgUrl = `/files${Math.random()}${path}`
    this.mrTailorStorage.upload(imgUrl,path)
    return imgUrl
  }
  // add new model
  addNewModel(newModel:any){
    newModel.modelId =this.mrTailorDB.createId();
    let ref = this.mrTailorDB.collection("models").doc(newModel.modelId)
    ref.set(newModel)
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
}
