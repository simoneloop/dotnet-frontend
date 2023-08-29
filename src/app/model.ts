export class Employee{
    public id:string;
    public name:string;
    public email:string;
    public phone:number;
    public salary:number;
    public employeeDepartments:EmployeeDepartment[]
   

    public constructor(id:string, name:string, email:string, phone:number, salary:number,employeeDepartments:EmployeeDepartment[]){

        this.id=id;
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.salary=salary;
        this.employeeDepartments=employeeDepartments;
       
    }
}
export interface Department{
    id:number,
    name:string,
    description:string
}
export interface EmployeeDepartment{
    department:Department
}
export interface EmployeeRequest{
    id:number;
    name:string;
    email:string;
    phone:number;
    salary:number;
    employeeDepartments:number[]
}