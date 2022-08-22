import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from './../services/dashboard.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-update-model',
  templateUrl: './dashboard-update-model.component.html',
  styleUrls: ['./dashboard-update-model.component.scss']
})
export class DashboardUpdateModelComponent implements OnInit {

  constructor(private DashboardService:DashboardService, private fb:FormBuilder, private activatedRoute:ActivatedRoute) { }

  updateModelForm= this.fb.group({
    modelType : ['',[Validators.required]],
    ageCategory:['',[Validators.required]],
    modelPrice : ['',[Validators.required]],
    medium : ['',[Validators.required]],
    large : ['',[Validators.required]],
    xLarge : ['',[Validators.required]],
    xxLarge : ['',[Validators.required]],
  })

  oldModel:any
  modelID:any

  ngOnInit(): void {
    // get active url params
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.modelID=params.get('id');
      this.getModelById(this.modelID)
    })
  }

  // get form values
  get modelType(){
    return this.updateModelForm.get('modelType')
  }

  get ageCategory(){
    return this.updateModelForm.get('ageCategory')
  }
  get modelPrice(){
    return this.updateModelForm.get('modelPrice')
  }
  get medium(){
    return this.updateModelForm.get('medium')
  }
  get large(){
    return this.updateModelForm.get('large')
  }
  get xLarge(){
    return this.updateModelForm.get('xLarge')
  }
  get xxLarge(){
    return this.updateModelForm.get('xxLarge')
  }
  // get model by id
  getModelById(modelID:any){
    this.DashboardService.getModelById(modelID).subscribe((model)=>{
      this.oldModel = model.payload.data()
      this.setFormValues()
    },(err)=>{
      console.log(err.message)
    })
  }

  // initialize form values
  setFormValues(){
    this.updateModelForm.patchValue({
      modelType:this.oldModel?.modelType,
      ageCategory:this.oldModel?.ageCategory,
      modelPrice:this.oldModel?.price,
      medium:this.oldModel?.medium,
      large:this.oldModel?.large,
      xLarge:this.oldModel?.xLarge,
      xxLarge:this.oldModel?.xxLarge,
    })
  }
  // update model
  updateModel(){
    let updatedModel = {
      modelId:this.oldModel?.modelId,
      modelType:this.modelType?.value,
      price:this.modelPrice?.value,
      ageCategory:this.ageCategory?.value,
      medium:this.medium?.value,
      large:this.large?.value,
      xLarge:this.xLarge?.value,
      xxLarge:this.xxLarge?.value,
    }
    this.DashboardService.updateModel(updatedModel)
  }
}
