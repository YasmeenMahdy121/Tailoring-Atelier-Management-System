import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-pending-models',
  templateUrl: './dashboard-pending-models.component.html',
  styleUrls: ['./dashboard-pending-models.component.scss']
})
export class DashboardPendingModelsComponent implements OnInit {

  penddingModels:any[]=[]
  modelToConfirmPrice:any = {}
  constructor(private dashboardServices:DashboardService) {
    this.dashboardServices.getPenddingModels().subscribe((penddingModels)=>{
      this.penddingModels=[]
      penddingModels.forEach((penddingModels)=>{
       this.penddingModels.push(penddingModels.payload.doc.data())
      })
   },(err)=>{
      console.log(err);

   })
  }
  // confirm pendding model
  confirmPenddingModel(model:any){
    // if(model.price){
    //   // update state to confirm and add confirm date
    //   model = {
    //     ...model,
    //     state: 'confirmed',
    //     confirmDate: new Date().getTime()
    //   }
    //   // add to confirm models
    //   this.dashboardServices.addToConfirmModels(model)
    //   // update in user models
    //   this.dashboardServices.updateUserModel(model)
    //   // delete it from pendding
    //   this.dashboardServices.deletePenddingModel(model)
    // }
    // else{
    //   this.modelToConfirmPrice = model
    // }
  }
  //
  // confirm pendding model
  setPriceAndConfirmPenddingModel(price:any){
      // // update state to confirm and add confirm date
      // this.modelToConfirmPrice = {
      //   ...this.modelToConfirmPrice,
      //   price,
      //   state: 'confirmed',
      //   confirmDate: new Date().getTime()
      // }
      // // add to confirm models
      // this.dashboardServices.addToConfirmModels(this.modelToConfirmPrice)
      // // update in user models
      // this.dashboardServices.updateUserModel(this.modelToConfirmPrice)
      // // delete it from pendding
      // this.dashboardServices.deletePenddingModel(this.modelToConfirmPrice)
  }

  ngOnInit(): void {
  }

}
