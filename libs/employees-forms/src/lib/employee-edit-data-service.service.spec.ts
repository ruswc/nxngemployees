import { TestBed } from '@angular/core/testing';

import { EmployeeEditDataServiceService } from './employee-edit-data-service.service';

describe('EmployeeEditDataServiceService', () => {
    let service: EmployeeEditDataServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EmployeeEditDataServiceService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
