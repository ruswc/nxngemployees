import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Employees } from '../employees.service';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderEmployeeNameService } from '@nxngemployees/shared';

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
        private headerEmployeeNameService: HeaderEmployeeNameService
    ) {}

    ngOnInit() {
        this.loader = true;
        this.getEmployee();
    }

    getEmployee() {
        this.employeesService.getEmployee(this.id).subscribe(response => {
            this.employee = response;
            this.loader = false;
            this.headerEmployeeNameService.setEmployeeName(this.employee.name);
        });
    }

    ngOnDestroy() {
        this.headerEmployeeNameService.setEmployeeName('');
    }
}
