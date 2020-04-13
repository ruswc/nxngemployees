import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditFormComponent } from './employee-edit-form.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EmployeeEditFormComponent', () => {
    let component: EmployeeEditFormComponent;
    let fixture: ComponentFixture<EmployeeEditFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeeEditFormComponent],
            imports: [
                FormsModule,
                MatInputModule,
                MatIconModule,
                MatCardModule,
                MatDividerModule,
                ReactiveFormsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeEditFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
