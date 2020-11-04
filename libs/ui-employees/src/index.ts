import { EmployeesListComponent } from './lib/employees-list/employees-list.component';
export { EmployeesListComponent };
import { EmployeeDetailedComponent } from './lib/employee-detailed/employee-detailed.component';
export { EmployeeDetailedComponent };
import { Employees } from './lib/employees.service';

export * from './lib/+state/employees/employees.actions';

export * from './lib/+state/employees/employees.reducer';

export * from './lib/+state/employees/employees.selectors';

export * from './lib/+state/employees/employees.models';
export { Employees };
export * from './lib/ui-employees.module';
