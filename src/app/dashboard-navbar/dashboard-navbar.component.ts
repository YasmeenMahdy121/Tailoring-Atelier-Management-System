import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from './../services/dashboard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {
  newNotification:number=0

  constructor(private dashboardServices:DashboardService,private router:Router) {
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

  toNavegate(input:string)
  {
    if (input =='') {
      this.router.navigate(["/dashboard/atelier_models"])
    }
    else{
      this.router.navigate(['/dashboard/searsh_user_models',input])
    }

  }
  updatNotification()
  {
    this.dashboardServices.updatNotification()

  }

  ngOnInit(): void {
  }

}
