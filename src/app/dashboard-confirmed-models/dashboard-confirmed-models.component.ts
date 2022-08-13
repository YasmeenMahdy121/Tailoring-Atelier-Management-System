import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../services/dashboard.service';

@Component({
  selector: 'app-dashboard-confirmed-models',
  templateUrl: './dashboard-confirmed-models.component.html',
  styleUrls: ['./dashboard-confirmed-models.component.scss']
})
export class DashboardConfirmedModelsComponent implements OnInit {
cofirmedModels:any[]=[]
  constructor(private dashboardServices:DashboardService) {
    this.dashboardServices.getConfirmedModels().subscribe((confirmModels)=>{
      this.cofirmedModels=[]
      confirmModels.forEach((confirmModel)=>{
       this.cofirmedModels.push(confirmModel.payload.doc.data())
      })
   },(err)=>{
      console.log(err);

   })
   }

   modelImplemented(model:any)
   {
    // update state to confirm and add confirm date
    model = {
      ...model,
      state: 'implemented',
      type:'exist',
      date: new Date().getTime()
      }
      delete model.confirmDate
      delete model.reservationDate
      // update in user models
      this.dashboardServices.updateUserModel(model)
      // delete it from pendding
       this.dashboardServices.deleteConfirmModel(model)
       delete model.clientInfo
       delete model.state
          // add to  models
       this.dashboardServices.addToModels(model)
       console.log(model);

   }
  ngOnInit(): void {
  }

}
