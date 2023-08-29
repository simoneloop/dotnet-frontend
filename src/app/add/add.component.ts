import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Department } from '../model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employee:FormGroup;
  departments:Department[]=[];

  constructor(private formBuilder:FormBuilder, private apiService:ApiService){
    this.employee=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      salary:['',Validators.required],
      departmentIds:['',Validators.required]
    });
  }
  ngOnInit(): void {
    this.apiService.loadDepartments().subscribe((data)=>{this.departments=data;})
  }
  crea():void{
    if(this.employee.valid){
      
      this.apiService.createEmployee(this.employee.value).subscribe((data)=>{
        console.log(data);
      });
    }
    
   
  }
}
