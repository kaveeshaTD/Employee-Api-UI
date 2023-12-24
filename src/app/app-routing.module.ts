import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './Component/Employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './Component/Employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Component/Employees/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path: '',
    component:EmployeesListComponent,
  },
  {
    path: 'employees',
    component:EmployeesListComponent,
  },
  {
    path: 'employees/add',
    component:AddEmployeeComponent,
  },
  {
    path: 'employees/Edit/:id',
    component:EditEmployeeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
