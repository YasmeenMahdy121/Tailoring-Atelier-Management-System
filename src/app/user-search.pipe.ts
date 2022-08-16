import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(allModels: any[], modelkeyWord:string, modelType:string, ageCategory:string, modelPrice:number, modelRate:number ): any {
    if(!modelkeyWord&&!modelType&&!ageCategory&&!modelPrice&&!modelRate){
      return allModels
    }
    else{
      if(modelkeyWord){
        allModels = allModels.filter(function(model) {
          return (model.modelType?.includes(modelkeyWord)||model.ageCategory?.includes(modelkeyWord));
        })
      }
      if(modelType){
        allModels = allModels.filter(function(model) {
          return model.modelType?.includes(modelType);
        })
      }
      if(ageCategory){
        allModels = allModels.filter(function(model) {
          return model.ageCategory?.includes(ageCategory);
        })
      }
      if(modelPrice){
        allModels = allModels.filter(function(model) {
          return model?.price > 0 && model?.price <= modelPrice;
        })
      }
      if(modelRate){
        allModels = allModels.filter(function(model) {
          let base =  (model.rateOut1+model.rateOut2+model.rateOut3+model.rateOut4+model.rateOut5)
          let rateValue = 0
          if(base){
            rateValue=Math.round(((model.rateOut1*1)+(model.rateOut2*2)+(model.rateOut3*3)+(model.rateOut4*4)+(model.rateOut5*5))/base)
          }
          return rateValue == +modelRate;
        })
      }
      return allModels
    }
  }

}
