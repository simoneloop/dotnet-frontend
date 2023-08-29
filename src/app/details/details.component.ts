import { Component, OnInit } from '@angular/core';
import { Department, Employee } from '../model';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  employee:FormGroup;
  departments:Department[]=[];
  selected:Employee | undefined;
  id:string="";
  departmentNames: string[] = [];
  


  constructor(private activatedroute:ActivatedRoute,private formBuilder:FormBuilder, private apiService:ApiService){
    this.employee=this.formBuilder.group({
      id:[''],
      name:[this.selected?.name,Validators.required],
      email:[this.selected?.email,Validators.required],
      phone:[this.selected?.phone,Validators.required],
      salary:[this.selected?.salary,Validators.required],
      departmentIds:[this.departmentNames,Validators.required]
    });
  }
  
  
  ngOnInit() {
    this.apiService.loadDepartments().subscribe(deps=>{this.departments=deps})
    this.activatedroute.params.subscribe(params => { 
      this.id = params['id'];
      this.apiService.loadEmployee(this.id).subscribe((data)=>{
        
        this.selected=data;
        if (this.departments) {
          this.departments.forEach((dept)=>{this.departmentNames.push(dept.name)})
        }
        this.employee.patchValue({
          id:Number.parseInt(this.id),
          name: this.selected.name,
          email: this.selected.email,
          phone: this.selected.phone,
          salary: this.selected.salary,
          
        });
      });
      
    });
  }
  aggiorna():void{
    this.apiService.updateEmployee(this.employee.value).subscribe((res)=>{console.log(res);})

  }
  

}
