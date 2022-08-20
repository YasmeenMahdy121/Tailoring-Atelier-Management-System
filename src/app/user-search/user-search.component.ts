import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 500;
  min = 0;
  showTicks = false;
  step = 5;
  thumbLabel = false;
  vertical = false;
  tickInterval = 1;
  modelkeyWord:any;
  allModels :any[]=[];
  modelType:string = ''
  ageCategory:string = ''
  modelPrice:number = 0
  modelRate:number = 0
  constructor(private activatedroute:ActivatedRoute, private userServices: UsersService) {
    // get active url params
    this.activatedroute.paramMap.subscribe((params:ParamMap)=>
    {

      this.modelkeyWord=params.get('keyword');
      
    })
    this.userServices.getAllModels().subscribe((model)=>{
      this.allModels=[]
      model.forEach((e)=>{
       this.allModels.push(e.payload.doc.data())
      })

   })
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  modelTypeChange(modelType:string){
    this.modelType = modelType
    this.modelkeyWord=''
    console.log(this.modelType)
  }
  modelAgeChange(ageCategory:string){
    this.ageCategory = ageCategory
    this.modelkeyWord=''

    console.log(this.ageCategory)
  }

  ngOnInit(): void {
  }
}
