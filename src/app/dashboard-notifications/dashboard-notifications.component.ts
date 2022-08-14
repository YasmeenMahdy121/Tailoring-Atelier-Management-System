import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../services/dashboard.service';

@Component({
  selector: 'app-dashboard-notifications',
  templateUrl: './dashboard-notifications.component.html',
  styleUrls: ['./dashboard-notifications.component.scss']
})
export class DashboardNotificationsComponent implements OnInit {
  usersNotification:any[]=[]
  constructor(private dashboardServices:DashboardService) { 
    this.dashboardServices.showNotification().subscribe((notifications)=>{
      this.usersNotification=[]
      notifications.forEach((notification:any) => {
        this.usersNotification.push(notification.payload.doc.data())
        
      });
      
      
    })
  }

  ngOnInit(): void {
  }

}
