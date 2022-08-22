import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-add-model',
  templateUrl: './dashboard-add-model.component.html',
  styleUrls: ['./dashboard-add-model.component.scss']
})
export class DashboardAddModelComponent implements OnInit {

  constructor(private DashboardService:DashboardService, private fb:FormBuilder , private router:Router) { }

  addModelForm = this.fb.group({
    modelType : ['',[Validators.required]],
    ageCategory:['',[Validators.required]],
    modelPrice : ['',[Validators.required]],
    modelPicture : ['',[Validators.required]],
    medium: ['',[Validators.required]],
    large : ['',[Validators.required]],
    xLarge : ['',[Validators.required]],
    xxLarge : ['',[Validators.required]],
  })

  imgPath:string = ''
  imgUrl:string = ''


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
  get medium(){
    return this.addModelForm.get('medium')
  }
  get large(){
    return this.addModelForm.get('large')
  }
  get xLarge(){
    return this.addModelForm.get('xLarge')
  }
  get xxLarge(){
    return this.addModelForm.get('xxLarge')
  }
  // get image path
  selectedImg($event:any){
    this.imgPath = $event.target.files[0]
  }

  // add model
  addModel(){
    // this.uploadImg()
    const newModel = {
      date:new Date().getTime(),
      modelType:this.modelType?.value,
      price:this.modelPrice?.value,
      ageCategory:this.ageCategory?.value,
      medium:this.medium?.value,
      large:this.large?.value,
      xLarge:this.xLarge?.value,
      xxLarge:this.xxLarge?.value,
      selledQuantity:0,
      rateOut1:0,
      rateOut2:0,
      rateOut3:0,
      rateOut4:0,
      rateOut5:0,
      type:'exist'
    }
    this.DashboardService.addNewModel(newModel,this.imgPath)
    this.addModelForm.reset()

    this.router.navigate(["/dashboard/atelier_models"])

  }

  ngOnInit(): void {

  }

}
