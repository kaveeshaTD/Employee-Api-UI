import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/Models/employee.Model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails : Employee ={
    id:0,
    firstName:'',
    lastName:'',
    email:'',
    city:''
  };
  constructor(private route:ActivatedRoute  , private employeeServices : EmployeesService , private router:Router , private toster :ToastrService){}

ngOnInit(): void {
 this.route.paramMap.subscribe({
  next:(params) =>{
    const id = params.get('id');
    if(id){
     this.employeeServices.getEmployee(id)
     .subscribe({
       next:(response)=>{
        this.employeeDetails = response
       }
     });
    }
  }
 })
}
updateEmployee(){
this.employeeServices.updateEmployee(this.employeeDetails.id,this.employeeDetails)
.subscribe({
  next:(response) =>{
    this.toster.success('Update Sucessfully' , 'Employee Details Updated');
    this.router.navigate(['employees']);
  }
});
}
}
