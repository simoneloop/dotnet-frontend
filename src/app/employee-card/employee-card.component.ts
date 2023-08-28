import { Component, Input } from '@angular/core';
import { Employee } from '../model';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
  @Input()
  employee!: Employee;

  constructor(private apiService:ApiService){}

  delete(i:string):void{
    this.apiService.deleteEmployee(i).subscribe((data)=>{
      window.location.reload();
      
    });
  }
  stampFromEdit():void{
    console.log("hello from edit")
  }
}
