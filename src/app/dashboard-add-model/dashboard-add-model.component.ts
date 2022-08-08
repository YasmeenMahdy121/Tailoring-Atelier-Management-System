import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-add-model',
  templateUrl: './dashboard-add-model.component.html',
  styleUrls: ['./dashboard-add-model.component.scss']
})
export class DashboardAddModelComponent implements OnInit {

  constructor(private DashboardService:DashboardService, private fb:FormBuilder) { }

  addModelForm= this.fb.group({
    modelType : ['',[Validators.required]],
    ageCategory:['',[Validators.required]],
    modelPrice : ['',[Validators.required]],
    modelPicture : ['',[Validators.required]],
  })

  imgPath:string = ''
  imgUrl:string = ''
  imgUrlP1:string = 'https://firebasestorage.googleapis.com/v0/b/iti-graduation-project-d5b5e.appspot.com/o'
  imgUrlP2:string = '?alt=media&token=349ee2d1-e9f5-4794-943a-3ebe9d0a7a95'

  // get form values
  get modelType(){
    return this.addModelForm.get('modelType')
  }
  get ageCategory(){
    return this.addModelForm.get('ageCategory')
  }
  get modelPrice(){
    return this.addModelForm.get('modelPrice')
  }
  get modelPicture(){
    return this.addModelForm.get('modelPicture')
  }
  // get image path
  selectedImg($event:any){
    this.imgPath = $event.target.files[0]
  }
  // upload image to fire storage
  uploadImg(){
    this.imgUrl = this.DashboardService.uploadImg(this.imgPath)
  }
  // add model
  addModel(){
    this.uploadImg()
    const newModel = {
      img:this.imgUrlP1+this.imgUrl+this.imgUrlP2,
      modelType:this.modelType?.value,
      price:this.modelPrice?.value,
      ageCategory:this.ageCategory?.value,
      selledQuantity:0,
      rateOut1:0,
      rateOut2:0,
      rateOut3:0,
      rateOut4:0,
      rateOut5:0
    }
    this.DashboardService.addNewModel(newModel)
    this.addModelForm.reset()
  }

  ngOnInit(): void {
  }

}
