import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  employee:FormGroup;

  constructor(private formBuilder:FormBuilder, private apiService:ApiService){
    this.employee=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      salary:['',Validators.required],
      department:['',Validators.required]
    });
  }
  stampa():void{
    if(this.employee.valid){
      
      this.apiService.createEmployee(this.employee.value).subscribe((data)=>{
        console.log(data);
      });
    }
    
   
  }
}
