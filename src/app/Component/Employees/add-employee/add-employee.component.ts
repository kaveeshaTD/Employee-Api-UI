import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/Models/employee.Model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

addEmployee: Employee = {
id:0,
firstName:'',
lastName:'',
email:'',
city:''

};

constructor(private employeeServices : EmployeesService , private router:Router , private toster :ToastrService)
{

}

ngOnInit(): void{

}

//save employee method
saveEmployee(){
this.employeeServices.saveEmployee(this.addEmployee)
.subscribe({
  next:(employee)=>{
  this.toster.success('Insert Sucessfully' , 'Employee Details Create');
  //this.router.navigate(['employees']);
  }
});
}
}
