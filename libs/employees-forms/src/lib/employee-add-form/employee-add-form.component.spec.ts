import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddFormComponent } from './employee-add-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EmployeeAddFormComponent', () => {
    let component: EmployeeAddFormComponent;
    let fixture: ComponentFixture<EmployeeAddFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeeAddFormComponent],
            imports: [
                MatInputModule,
                MatIconModule,
                MatCardModule,
                MatDividerModule,
                FormsModule,
                ReactiveFormsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeAddFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
