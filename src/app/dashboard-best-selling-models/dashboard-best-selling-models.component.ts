import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-best-selling-models',
  templateUrl: './dashboard-best-selling-models.component.html',
  styleUrls: ['./dashboard-best-selling-models.component.scss']
})
export class DashboardBestSellingModelsComponent implements OnInit {

  bestSellingModels:any[]=[]
  constructor(private dashboardServices:DashboardService, private fb:FormBuilder ) {
    this.dashboardServices.bestSellingModels().subscribe((model)=>{
      this.bestSellingModels=[]
      model.forEach((e)=>{
       this.bestSellingModels.push(e.payload.doc.data())
      })
      this.bestSellingModels = this.sortRating(this.bestSellingModels)
      this.bestSellingModels = this.sortSelling(this.bestSellingModels)
   },(err)=>{
      console.log(err);

   })
  }

  value:number = 0

  ngOnInit(): void {
  }

sortRating(models:any){
    //Outer pass
    for(let i = 0; i < models.length; i++){

        //Inner pass
        for(let j = i; j < models.length - i - 1; j++){
            //Value comparison using ascending order
            let base1 = (models[j].rateOut1+models[j].rateOut2+models[j].rateOut3+models[j].rateOut4+models[j].rateOut5)
            let rating1=0
            if(base1){
              rating1 = Math.round(((models[j].rateOut1*1)+(models[j].rateOut2*2)+(models[j].rateOut3*3)+(models[j].rateOut4*4)+(models[j].rateOut5*5))/base1)
            }
            //
            let base2 = (models[j + 1].rateOut1+models[j + 1].rateOut2+models[j + 1].rateOut3+models[j + 1].rateOut4+models[j + 1].rateOut5)
            let rating2=0
            models[j].rating = rating1
            models[j + 1].rating = rating2
            if(base2){
              rating2 = Math.round(((models[j + 1].rateOut1*1)+(models[j + 1].rateOut2*2)+(models[j + 1].rateOut3*3)+(models[j + 1].rateOut4*4)+(models[j + 1].rateOut5*5))/base2)
            }

            if(rating2 > rating1){

                //Swapping
                [models[j + 1], models[j]] = [models[j], models[j + 1]]
            }
        }
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

}
