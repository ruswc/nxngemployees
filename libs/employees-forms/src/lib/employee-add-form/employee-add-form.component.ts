import { Component, OnInit } from '@angular/core';
import { EmployeeEditDataServiceService } from '@nxngemployees/employees-forms';

@Component({
    selector: 'nxngemployees-employee-add-form',
    templateUrl: './employee-add-form.component.html',
    styleUrls: ['./employee-add-form.component.scss']
})
export class EmployeeAddFormComponent implements OnInit {
    hide$ = this.employeeEditDataServiceService.addFormState$;
    constructor(
        public employeeEditDataServiceService: EmployeeEditDataServiceService
    ) {}

    ngOnInit(): void {}
}
