import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allModels:any[] , term:string): any {
    if(term == undefined) {
    return allModels;
    }
    return allModels.filter(function(allModels) {
      return allModels.modelType.includes(term);
    })
  }

}
