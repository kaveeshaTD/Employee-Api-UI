import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee.Model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  //to get all employee
  getAllemployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl+'/api/Employees');
  }

  //to save employee create
  saveEmployee(addEmployee:Employee):Observable<Employee>{
   return this.http.post<Employee>(this.baseApiUrl + '/api/Employees',addEmployee);
  }

  //to get employee by id
  getEmployee(id:string): Observable<Employee>{
   return this.http.get<Employee>(this.baseApiUrl +'/api/Employees/'+id);
  }

  //to update employee
  updateEmployee(id:number ,updateEmployeeRequest:Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl +'/api/Employees/'+id, updateEmployeeRequest);
  }

  //to delete Employee
  deleteEmployee(id:number): Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl +'/api/Employees/'+id);
  }
}
