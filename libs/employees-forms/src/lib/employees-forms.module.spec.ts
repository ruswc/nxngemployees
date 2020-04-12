import { async, TestBed } from '@angular/core/testing';
import { EmployeesFormsModule } from './employees-forms.module';

describe('EmployeesFormsModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [EmployeesFormsModule]
        }).compileComponents();
    }));

    it('should create', () => {
        expect(EmployeesFormsModule).toBeDefined();
    });
});
