import { TestBed } from '@angular/core/testing';
import { HeaderEmployeeNameService } from '@nxngemployees/shared';

describe('HeaderEmployeeNameService', () => {
    let service: HeaderEmployeeNameService;
    let setResult: any;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HeaderEmployeeNameService);
        service.setEmployeeName('name');
        service.employeeName$.subscribe(value => (setResult = value));
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should set name to passed one, for examle "name" === "name"', () => {
        expect(setResult).toEqual('name');
    });

    it('should return name "name"', () => {
        let result: any;
        service.getEmployeeName().subscribe(value => {
            result = value;
        });
    });
});
