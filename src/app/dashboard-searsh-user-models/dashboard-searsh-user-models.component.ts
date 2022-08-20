import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
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
export class DashboardSearshUserModelsComponent implements OnInit {
  error:string=''
  client:any
  loggedInInfo:any
  userModels:any
  allModelsData :any[]=[];
  searchValue:any
  usersIds:any[]=[]
  users:any={}
  check:any[]=[]
  constructor(private fb:FormBuilder, private userService:UsersService,private activatedRoute:ActivatedRoute,private dashboardService:DashboardService,private authService:AuthService,) {

   }






  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.searchValue=params.get('keyword');
       this.dashboardService.getAllClients().subscribe((clients)=>{
        this.error=''
        this.usersIds = []
        this.users={}


      for (let i = 0; i < clients.length; i++) {
        let u:any = clients[i].payload.doc.data()
        this.check.push(u)

        if(u.email===this.searchValue || u.phone===this.searchValue) {
          this.error=''
          this.usersIds.push(u)
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
            })

          })
          break;
        }
        else
        {
          this.error=`لا يوجد ${this.searchValue} بهذا الشكل`
          this.allModelsData=[];
        }



      }
    console.log(this.error)

 })

    })

  }

//  /////////////////////////////
showConfirm:boolean=false

  pendingModelForm= new FormGroup({
    modelPrice:new FormControl('',[Validators.required])
  })

  get modelPrice()
  {
    return this.pendingModelForm.get("modelPrice")
  }
  modelToConfirmPrice:any = {}
  // confirm pendding model
  confirmPenddingModel(model:any){
    if(model.price){
      // update state to confirm and add confirm date

      model = {
        ...model,
        state: 'confirmed',
        confirmDate: new Date().getTime()
      }
      // add to confirm models
      this.dashboardService.addToConfirmModels(model)
      // update in user models
      this.dashboardService.updateUserModel(model)
      // delete it from pendding
      this.dashboardService.deletePenddingModel(model)
    }
    else{
      this.modelToConfirmPrice = model
      this.showConfirm=true
    }
  }
  //
  // confirm pendding model
  setPriceAndConfirmPenddingModel(price:any){
      // update state to confirm and add confirm date
      this.modelToConfirmPrice = {
        ...this.modelToConfirmPrice,
        price,
        state: 'confirmed',
        confirmDate: new Date().getTime()
      }
      // add to confirm models
      this.dashboardService.addToConfirmModels(this.modelToConfirmPrice)
      // update in user models
      this.dashboardService.updateUserModel(this.modelToConfirmPrice)
      // delete it from pendding
      this.dashboardService.deletePenddingModel(this.modelToConfirmPrice)
      this.showConfirm=false

  }

  closeOverlay()
  {
    this.showConfirm=false
  }
  // /////////////////
  modelImplemented(model:any)
  {
   // update state to confirm and add confirm date
   model = {
     ...model,
     selledQuantity:++model.selledQuantity,
     state: 'implemented',
     type:'exist',
     date: new Date().getTime()
     }
     delete model.confirmDate
     delete model.reservationDate
     // update in user models
     this.dashboardService.updateUserModel(model)
     // delete it from pendding
      this.dashboardService.deleteConfirmModel(model)
      delete model.clientInfo
      delete model.state
         // add to  models
      this.dashboardService.addToModels(model)

  }
  //
}
