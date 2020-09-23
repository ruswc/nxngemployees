import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmployeeEditDataService } from '@nxngemployees/employees-forms';
import { HeaderEmployeeNameService } from '@nxngemployees/shared';

export interface Employee {
    id: number;
    name: string;
    username: string;
    email?: string;
    phone?: string;
    website?: string;
}

@Component({
    selector: 'nxngemployees-employee-edit-form',
    templateUrl: './employee-edit-form.component.html',
    styleUrls: ['./employee-edit-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeEditFormComponent implements OnInit {
    @Input() employee: Employee;

    hide$ = this.employeeEditDataService.editFormState$;

    nameFormControl = new FormControl('', [Validators.required]);
    usernameFormControl = new FormControl('', [Validators.required]);
    phoneFormControl = new FormControl('', [Validators.required]);
    websiteFormControl = new FormControl('', [Validators.required]);
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email
    ]);

    constructor(
        public employeeEditDataService: EmployeeEditDataService,
        public headerEmployeeNameService: HeaderEmployeeNameService
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.employeeEditDataService.theEmployeeSubject$.subscribe(value => {
            if (value) {
                this.employee = value;
            }
        });
    }

    saveChanges() {
        this.employeeEditDataService.setEmployee(this.employee);
        this.headerEmployeeNameService.setEmployeeName(this.employee.name);
    }
}
