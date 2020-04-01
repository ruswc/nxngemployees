import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employees } from '../employees.service';
import { EmployeesService } from '../employees.service';

@Component({
    selector: 'nxngemployees-employees-list',
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
    sort = '';
    loader = false;

    employees: Employees[] = [];

    constructor(private employeesService: EmployeesService) {}

    ngOnInit(): void {
        this.loader = true;
        this.getEmployees();
    }

    getEmployees(): void {
        this.employeesService.getEmployees().subscribe(employees => {
            this.employees = employees;
            this.loader = false;
        });
    }
}
