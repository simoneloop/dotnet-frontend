import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../model';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(employees:Employee[],searchTerm:string): Employee[] {
    if(employees.length>0 && searchTerm!="" && searchTerm!=null){
      return employees.filter(item=> item.name.toLowerCase().startsWith(searchTerm));
    }
    return employees;
    
  }

}
