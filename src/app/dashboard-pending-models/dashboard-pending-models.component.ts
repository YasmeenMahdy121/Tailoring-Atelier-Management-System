import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard-pending-models',
  templateUrl: './dashboard-pending-models.component.html',
  styleUrls: ['./dashboard-pending-models.component.scss']
})
export class DashboardPendingModelsComponent implements OnInit {



  constructor(private dashboardServices:DashboardService,private fb:FormBuilder) {
    this.dashboardServices.getPenddingModels().subscribe((penddingModels)=>{
      this.penddingModels=[]
      penddingModels.forEach((penddingModels)=>{
       this.penddingModels.push(penddingModels.payload.doc.data())
      })
   })
  }

showConfirm:boolean=false

  pendingModelForm= new FormGroup({
    modelPrice:new FormControl('',[Validators.required]),
    medium:new FormControl('',[Validators.required]),
    large :new FormControl('',[Validators.required]),
    xLarge :new FormControl('',[Validators.required]),
    xxLarge :new FormControl('',[Validators.required]),
  })

  get modelPrice()
  {
    return this.pendingModelForm.get("modelPrice")
  }
  get medium(){
    return this.pendingModelForm.get('medium')
  }
  get large(){
    return this.pendingModelForm.get('large')
  }
  get xLarge(){
    return this.pendingModelForm.get('xLarge')
  }
  get xxLarge(){
    return this.pendingModelForm.get('xxLarge')
  }
  penddingModels:any[]=[]
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
      this.dashboardServices.addToConfirmModels(model)
      // update in user models
      this.dashboardServices.updateUserModel(model)
      // delete it from pendding
      this.dashboardServices.deletePenddingModel(model)
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
        medium:this.medium?.value,
        large:this.large?.value,
        xLarge:this.xLarge?.value,
        xxLarge:this.xxLarge?.value,
        state: 'confirmed',
        confirmDate: new Date().getTime()
      }
      // add to confirm models
      this.dashboardServices.addToConfirmModels(this.modelToConfirmPrice)
      // update in user models
      this.dashboardServices.updateUserModel(this.modelToConfirmPrice)
      // delete it from pendding
      this.dashboardServices.deletePenddingModel(this.modelToConfirmPrice)
      this.showConfirm=false
      console.log(price);

  }

  closeOverlay()
  {
    this.showConfirm=false
  }

  ngOnInit(): void {
  }

}
