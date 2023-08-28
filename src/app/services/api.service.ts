import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  public loadEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:5000/Employee');

  }

  createEmployee(e:Employee):Observable<Employee>{
    return this.http.post<Employee>('http://localhost:5000/Employee',e);
  }
  deleteEmployee(i:string):Observable<Employee>{
    return this.http.delete<Employee>('http://localhost:5000/Employee/'+i);
  }
  totalSalary():Observable<Number>{
    return this.http.get<Number>('http://localhost:5000/Employee/totalSalary');
  }
}
