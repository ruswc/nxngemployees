import { async, TestBed } from '@angular/core/testing';
import { EmployeesFormsModule } from './employees-forms.module';
import { FormsModule } from '@angular/forms';

describe('EmployeesFormsModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [EmployeesFormsModule, FormsModule]
        }).compileComponents();
    }));

    it('should create', () => {
        expect(EmployeesFormsModule).toBeDefined();
    });
});
