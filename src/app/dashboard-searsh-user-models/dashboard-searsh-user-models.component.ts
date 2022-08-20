import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DashboardService } from './../services/dashboard.service';
import { UsersService } from './../services/users.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard-searsh-user-models',
  templateUrl: './dashboard-searsh-user-models.component.html',
  styleUrls: ['./dashboard-searsh-user-models.component.scss']
})
export class DashboardSearshUserModelsComponent implements OnInit,OnChanges {
  error:string=''
  client:any
  loggedInInfo:any
  userModels:any
  allModelsData :any[]=[];
  searchValue:any
  usersIds:any[]=[]
  users:any={}
  check:any[]=[]
  constructor(private userService:UsersService,private activatedRoute:ActivatedRoute,private dashboardService:DashboardService,private authService:AuthService,) {

   }




  DeleteModel(userId:any,modelId:any){
    this.dashboardService.deleteUserModel(userId,modelId);
    console.log('deleted');
    console.log(userId,modelId);
  }



  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.searchValue=params.get('keyword');
      console.log(this.searchValue);
       this.dashboardService.getAllClients().subscribe((clients)=>{
    
    this.usersIds = []
    this.users={}

    

    clients.forEach((client)=>{
      let u:any = client.payload.doc.data()
      this.check.push(u)
      console.log(this.check);
      
      if(u.email===this.searchValue || u.phone===this.searchValue) {
        this.usersIds.push(u)
        console.log("yes");
        console.log(u);
        this.dashboardService.getUserSearch(u.clientId)
        this.userService.getCurrentUsersModels(u.clientId).subscribe((userModel)=>{
          this.allModelsData=[];
          this.userModels = userModel;
          this.userModels.forEach((e:any)=>{
            let model = e.payload.doc.data()
            let base =  (model.rateOut1+model.rateOut2+model.rateOut3+model.rateOut4+model.rateOut5)
            if(base){
              model.rate = Math.round(((model.rateOut1*1)+(model.rateOut2*2)+(model.rateOut3*3)+(model.rateOut4*4)+(model.rateOut5*5))/base)
            }
            this.allModelsData.push(model)
            console.log(e.payload.doc.data());
          })
          // console.log(this.userModels.payload._delegate.doc._document.data.value.mapValue.fields.price);
          // console.log(this.allModelsData);
          // console.log(this.allModelsData);
          // console.log(this.allModelsData.clientInfo.);
    
        })
      }
      else
      {
        this.error=`لا يوجد ${this.searchValue} بهذا الشكل`
        console.log("no");
        
      }
     
    })

 })
      
    })
    
  }

  ngOnChanges(changes: SimpleChanges): void {
   
  }
}
