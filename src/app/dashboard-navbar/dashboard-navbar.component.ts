import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../services/dashboard.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {
  newNotification:number=0
  constructor(private dashboardServices:DashboardService) { 
    this.dashboardServices.showNotification().subscribe((notifications)=>{
      this.newNotification=0
      notifications.forEach((notification:any) => {
        if (notification.payload.doc.data().note == 'new') {
          notification.payload.doc.data()
        this.newNotification++
        }
      });
      
    })
  }

  updatNotification()
  {
    this.dashboardServices.updatNotification()
    
  }

  ngOnInit(): void {
  }

}
