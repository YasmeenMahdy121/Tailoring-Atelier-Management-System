import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-delete-model',
  templateUrl: './dashboard-delete-model.component.html',
  styleUrls: ['./dashboard-delete-model.component.scss']
})
export class DashboardDeleteModelComponent implements OnInit {

  constructor(private DashboardService:DashboardService, private activatedRoute:ActivatedRoute) { }

  modelID:any = false

  ngOnInit(): void {
    // get active url params
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.modelID=params.get('id');
    })
  }

  // delete model
  deleteModel(){
    this.DashboardService.deleteModel(this.modelID)
  }

}
