import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(data:any[], start:String): any {
    if(data!=null && start!=null && start!=""){
      return data.filter( item => item.city.toLowerCase().startsWith(start))
    }
    
    return data
    
  }

}
