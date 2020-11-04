import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeEditDataService } from '@nxngemployees/employees-forms';
import { HeaderEmployeeNameService } from '@nxngemployees/shared';
import { Employees, EmployeesService } from '../employees.service';

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
        private employeeEditDataService: EmployeeEditDataService
    ) {}

    public ngOnInit() {
        this.loader = true;
        this.employeeEditDataService.theEmployeeSubject$.subscribe(value => {
            this.employee = value;
        });
        this.getEmployee();
    }

    public getEmployee() {
        this.employeesService.getEmployee(this.id).subscribe(response => {
            this.employeeEditDataService.setEmployee([]);
            this.loader = true;
            setTimeout(() => {
                this.employeeEditDataService.setEmployee(response);
                this.loader = false;
                this.headerEmployeeNameService.setEmployeeName(
                    this.employee.name
                );
            }, 250);
        });
    }

    public showEditForm() {
        this.employeeEditDataService.showEditForm();
    }

    public ngOnDestroy() {
        this.headerEmployeeNameService.setEmployeeName('');
    }
}
