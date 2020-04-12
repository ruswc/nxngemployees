import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Employees } from '../employees.service';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderEmployeeNameService } from '@nxngemployees/shared';
import { EmployeeEditDataServiceService } from '@nxngemployees/employees-forms';

@Component({
    selector: 'nxngemployees-employee-detailed',
    templateUrl: './employee-detailed.component.html',
    styleUrls: ['./employee-detailed.component.scss']
})
export class EmployeeDetailedComponent implements OnInit, OnDestroy {
    @Input() employee: Employees;
    id: number = +this.route.snapshot.paramMap.get('id');
    loader = false;

    constructor(
        private employeesService: EmployeesService,
        private route: ActivatedRoute,
        private headerEmployeeNameService: HeaderEmployeeNameService,
        private employeeEditDataServiceService: EmployeeEditDataServiceService
    ) {}

    ngOnInit() {
        this.loader = true;
        this.employeeEditDataServiceService.theEmployeeSubject$.subscribe(
            value => {
                this.employee = value;
            }
        );
        this.getEmployee();
    }

    getEmployee() {
        this.employeesService.getEmployee(this.id).subscribe(response => {
            this.employeeEditDataServiceService.setEmployee(response);
            this.loader = false;
            this.headerEmployeeNameService.setEmployeeName(this.employee.name);
        });
    }

    ngOnDestroy() {
        this.headerEmployeeNameService.setEmployeeName('');
    }
}
