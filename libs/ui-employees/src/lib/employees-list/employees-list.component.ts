import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { EmployeeEditDataService } from '@nxngemployees/employees-forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Employees, EmployeesService } from '../employees.service';

@Component({
    selector: 'nxngemployees-employees-list',
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesListComponent implements OnInit, OnDestroy {
    public sort = '';
    public loader = false;
    public employees: Employees[] = [];

    private readonly onDestroy = new Subject<void>();

    constructor(
        private employeesService: EmployeesService,
        private cd: ChangeDetectorRef,
        public employeeEditDataService: EmployeeEditDataService
    ) {}

    public ngOnInit(): void {
        this.loader = true;
        this.getEmployees();

        this.employeeEditDataService.theNewEmployee$
            .pipe(takeUntil(this.onDestroy))
            .subscribe(value => {
                this.employees.push(value);
            });
    }

    public ngOnDestroy() {
        this.onDestroy.next();
    }

    public getEmployees(): void {
        this.loader = true;
        this.employees = [];
        setTimeout(() => {
            this.employeesService
                .getEmployees()
                .pipe(takeUntil(this.onDestroy))
                .subscribe(employees => {
                    this.employees = employees;
                    this.loader = false;
                    this.cd.detectChanges();
                });
        }, 250);
    }
}
