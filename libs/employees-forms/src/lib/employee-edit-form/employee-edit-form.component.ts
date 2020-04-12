import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit
} from '@angular/core';
import { EmployeeEditDataServiceService } from '@nxngemployees/employees-forms';
import { HeaderEmployeeNameService } from '@nxngemployees/shared';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from './my-error-state-matcher';

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

    hide$ = this.employeeEditDataServiceService.editFormState$;

    matcher = new MyErrorStateMatcher();
    nameFormControl = new FormControl('', [Validators.required]);
    usernamenameFormControl = new FormControl('', [Validators.required]);
    phoneFormControl = new FormControl('', [Validators.required]);
    websiteFormControl = new FormControl('', [Validators.required]);
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email
    ]);

    constructor(
        public employeeEditDataServiceService: EmployeeEditDataServiceService,
        public headerEmployeeNameService: HeaderEmployeeNameService
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.employeeEditDataServiceService.theEmployeeSubject$.subscribe(
            value => {
                if (value) {
                    this.employee = value;
                }
            }
        );
    }

    saveChanges() {
        this.employeeEditDataServiceService.setEmployee(this.employee);
        this.headerEmployeeNameService.setEmployeeName(this.employee.name);
    }
}
