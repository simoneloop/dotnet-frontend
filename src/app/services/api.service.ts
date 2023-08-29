import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department, Employee, EmployeeRequest } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  public loadEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>('https://localhost:5001/Employee');

  }

  createEmployee(e:Employee):Observable<Employee>{
    return this.http.post<Employee>('https://localhost:5001/Employee/',e);
  }
  deleteEmployee(i:string):Observable<Employee>{
    return this.http.delete<Employee>('https://localhost:5001/Employee/'+i);
  }
  updateEmployee(e:EmployeeRequest):Observable<Employee>{
    return this.http.put<Employee>("https://localhost:5001/Employee",e);
  }
  totalSalary():Observable<Number>{
    return this.http.get<Number>('https://localhost:5001/Employee/totalSalary');
  }
  loadDepartments():Observable<Department[]>{
    return this.http.get<Department[]>('https://localhost:5001/Department');
  }
  loadEmployee(id:string):Observable<Employee>{
    return this.http.get<Employee>("https://localhost:5001/Employee/"+id);
  }
}
