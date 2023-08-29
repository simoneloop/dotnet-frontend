import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Employee } from '../model';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public employees:Employee[]=[];
  public totalSalary:Number=0;
  public search:FormControl;
  

  public constructor(private http:HttpClient, private apiService: ApiService, private router:Router){
    this.search=new FormControl('');
  }
  ngOnInit(): void {
    
    this.apiService.loadEmployees().subscribe((data) => {
      this.employees=data;
    });
    this.apiService.totalSalary().subscribe((salary)=>{
      this.totalSalary=salary;
    })
  }
 

 

}
