import { UsersService } from './../services/users.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-models',
  templateUrl: './view-all-models.component.html',
  styleUrls: ['./view-all-models.component.scss']
})
export class ViewAllModelsComponent implements OnInit {
  category:any
  allModels:any
  categoryModels:any
  constructor(private userServices:UsersService, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    // get active url params
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.category=params.get('category');
      this.getAllModels()
    })
  }
  getAllModels(){
    this.userServices.getAllModelsOrderedBySelling().subscribe((models)=>{
      this.allModels=[]
      models.forEach((model)=>{
       this.allModels.push(model.payload.doc.data())
      })
      this.allModels = this.getAllCategoryModels(this.allModels, this.category)
      console.log(this.allModels)

   },(err)=>{
      console.log(err);

   })
  }
  getAllCategoryModels(models:any, category:any){
    if(category=='allModels'||category=='best_selling'){
      return models;
    }
    else{
      let categoryModels=models.filter((model:any)=>{
        return model.modelType==category;
      })
      return categoryModels;
    }
  }

}
