import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/Models/employee.Model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

employees: Employee[] = [];

constructor(private employeesServices: EmployeesService , private toster :ToastrService){}

ngOnInit(): void {
    this.employeesServices.getAllemployees()
    .subscribe({
        next: (employee) =>{
          this.employees=employee
        },
      error:(response)=>{
        console.log(response);
      } 
   });
  }

  //delete Employee method
  deleteEmployee(id:number){
    if(confirm('Are you sure Want to Delete this Employee'))
  this.employeesServices.deleteEmployee(id)
  .subscribe({
    next: (response)=>{
      this.toster.error('Record Deleted' , 'Employee Record Deleted');
    }
  });
  }
}
