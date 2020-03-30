import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from '../../../ui-employees/src/lib/employees-list/employees-list.component';
import { EmployeeDetailedComponent } from '../../../ui-employees/src/lib/employee-detailed/employee-detailed.component';
// import { EmployeesComponent } from './employees/employees.component';
// import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesListComponent },
  { path: 'employees/:id', component: EmployeeDetailedComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
