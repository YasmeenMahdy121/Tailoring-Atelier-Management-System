import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-all-models-with-crud-operation',
  templateUrl: './dashboard-all-models-with-crud-operation.component.html',
  styleUrls: ['./dashboard-all-models-with-crud-operation.component.scss']
})
export class DashboardAllModelsWithCrudOPerationComponent implements OnInit {

  allModels:any[]=[]
  term:any
  constructor(private dashboardServices:DashboardService , private Router:Router) {
    this.dashboardServices.getAllModels().subscribe((model)=>{
      this.allModels=[]
      model.forEach((e)=>{
       this.allModels.push(e.payload.doc.data())
      })
   },(err)=>{
      console.log(err);

   })

  }


  ngOnInit(): void {

  }

}
