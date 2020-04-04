import { TestBed } from '@angular/core/testing';

import { DataTransmissionService } from '@nxngemployees/shared';

describe('DataTransmissionService', () => {
    let service: DataTransmissionService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DataTransmissionService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should save passed Path value', () => {
        const path = 'Name';
        service.setHistoryPath(path);
        const fetched = service.getHistoryPath();
        expect(fetched).toEqual(path);
    });
    it('should clear stored Path value', () => {
        const path = 'Name';
        service.setHistoryPath(path);

        service.clearHistoryPath();
        const fetched = service.getHistoryPath();

        expect(fetched).toEqual('');
    });
});
