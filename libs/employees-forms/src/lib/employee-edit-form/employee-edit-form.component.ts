import { Component, OnInit } from '@angular/core';
import { EmployeeEditDataServiceService } from '@nxngemployees/employees-forms';
import { HeaderEmployeeNameService } from '@nxngemployees/shared';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from './my-error-state-matcher';

@Component({
    selector: 'nxngemployees-employee-edit-form',
    templateUrl: './employee-edit-form.component.html',
    styleUrls: ['./employee-edit-form.component.scss']
})
export class EmployeeEditFormComponent implements OnInit {
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

    theEmployeeBehaviorSubject = {
        id: undefined,
        name: undefined,
        username: undefined,
        email: undefined,
        phone: undefined,
        website: undefined
    };

    constructor(
        public employeeEditDataServiceService: EmployeeEditDataServiceService,
        public headerEmployeeNameService: HeaderEmployeeNameService
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.employeeEditDataServiceService.behaviorSubject$.subscribe(
            value => {
                if (value) {
                    this.theEmployeeBehaviorSubject.id = value.id;
                    this.theEmployeeBehaviorSubject.name = value.name;
                    this.theEmployeeBehaviorSubject.username = value.username;
                    this.theEmployeeBehaviorSubject.email = value.email;
                    this.theEmployeeBehaviorSubject.phone = value.phone;
                    this.theEmployeeBehaviorSubject.website = value.website;
                }
            }
        );
    }

    saveChanges() {
        this.employeeEditDataServiceService.behaviorSubject$.complete();
        console.log(this.theEmployeeBehaviorSubject);
        this.employeeEditDataServiceService.setEmployee(
            this.theEmployeeBehaviorSubject
        );
    }
}
