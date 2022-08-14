import { Component, OnInit } from '@angular/core';
import { throttleTime } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allModels :any[]=[];
  dress :any[]=[];
  jacket :any[]=[];
  jaib :any[]=[];

  constructor(private userServices: UsersService) { 
  
    this.userServices.getAllModels().subscribe((model)=>{
      this.allModels=[]
      model.forEach((e)=>{
       this.allModels.push(e.payload.doc.data())
      })
     this.calcRating(this.allModels);
     this.sortSelling(this.allModels)
     this.dress=this.getCategoryModels(this.allModels,'فستان')
     this.jacket=this.getCategoryModels(this.allModels,'جاكت')
     this.jaib=this.getCategoryModels(this.allModels,'جيبة')
     console.log(this.allModels);
     
   },(err)=>{
      console.log(err);

   })
  }

  ngOnInit(): void {
  }
  calcRating(models:any){
    //Outer pass
    for(let i = 0; i < models.length; i++){

        //Inner pass
       
            //Value comparison using ascending order
            let base = (models[i].rateOut1+models[i].rateOut2+models[i].rateOut3+models[i].rateOut4+models[i].rateOut5)
            let rating=0
            if(base){
              rating = Math.round(((models[i].rateOut1*1)+(models[i].rateOut2*2)+(models[i].rateOut3*3)+(models[i].rateOut4*4)+(models[i].rateOut5*5))/base)
            }
            models[i].rate=rating
       
    };
    return models;
};
sortSelling(models:any){

  //Outer pass
  for(let i = 0; i < models.length; i++){

      //Inner pass
      for(let j = 0; j < models.length - i - 1; j++){


          if(models[j + 1].selledQuantity > models[j].selledQuantity){

              //Swapping
              [models[j + 1], models[j]] = [models[j], models[j + 1]]
          }
      }
  };
  return models;
};
getCategoryModels(allModels:any,category:any){
  let categoryModels=allModels.filter((model:any)=>{
    return model.modelType==category;
  })
  return categoryModels;
}
}
