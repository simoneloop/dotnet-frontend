export class Employee{
    public id:string;
    public name:string;
    public email:string;
    public phone:number;
    public salary:number;
    public department:string;

    public constructor(id:string, name:string, email:string, phone:number, salary:number, department:string){

        this.id=id;
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.salary=salary;
        this.department=department;
    }
}