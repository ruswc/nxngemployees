import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeEditDataService } from '@nxngemployees/employees-forms';

@Component({
    selector: 'nxngemployees-employee-add-form',
    templateUrl: './employee-add-form.component.html',
    styleUrls: ['./employee-add-form.component.scss']
})
export class EmployeeAddFormComponent implements OnInit {
    hide$ = this.employeeEditDataService.addFormState$;

    addForm: FormGroup;

    constructor(public employeeEditDataService: EmployeeEditDataService) {}

    ngOnInit(): void {
        this.initForm();
    }

    onSubmit() {
        console.log(this.addForm);
        this.employeeEditDataService.addEmployee(this.addForm.value);
        this.employeeEditDataService.hideAddForm();
        this.initForm();
    }

    initForm(): void {
        this.addForm = new FormGroup({
            id: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            username: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required]),
            website: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email])
        });
    }
}
