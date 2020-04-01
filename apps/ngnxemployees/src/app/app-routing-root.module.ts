import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    EmployeeDetailedComponent,
    EmployeesListComponent
} from '@nxngemployees/ui-employees';

const routes: Routes = [
    { path: 'employees', component: EmployeesListComponent },
    { path: 'employees/:id', component: EmployeeDetailedComponent },
    { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingRootModule {}
