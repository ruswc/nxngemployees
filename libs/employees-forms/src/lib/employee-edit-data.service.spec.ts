import { TestBed } from '@angular/core/testing';

import { EmployeeEditDataService } from './employee-edit-data.service';

describe('EmployeeEditDataService', () => {
    let service: EmployeeEditDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EmployeeEditDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
