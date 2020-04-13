import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees.service';
import { EmployeesService } from '../employees.service';
import { EmployeeEditDataService } from '@nxngemployees/employees-forms';

@Component({
    selector: 'nxngemployees-employees-list',
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
    sort = '';
    loader = false;

    employees: Employees[] = [];

    constructor(
        private employeesService: EmployeesService,
        public employeeEditDataService: EmployeeEditDataService
    ) {}

    ngOnInit(): void {
        this.loader = true;
        this.getEmployees();

        this.employeeEditDataService.theNewEmployee$.subscribe(value => {
            this.employees.push(value);
        });
    }

    getEmployees(): void {
        this.employeesService.getEmployees().subscribe(employees => {
            this.employees = employees;
            this.loader = false;
        });
    }
}
