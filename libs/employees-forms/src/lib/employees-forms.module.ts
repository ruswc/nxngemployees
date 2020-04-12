import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEditFormComponent } from './employee-edit-form/employee-edit-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
        MatDividerModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    declarations: [EmployeeEditFormComponent],
    exports: [EmployeeEditFormComponent]
})
export class EmployeesFormsModule {}
