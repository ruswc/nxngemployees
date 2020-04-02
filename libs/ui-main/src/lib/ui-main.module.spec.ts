import { async, TestBed } from '@angular/core/testing';
import { UiMainModule } from './ui-main.module';
import { CommonModule } from '@angular/common';
import { UiHeaderModule } from '@nxngemployees/ui-header';

describe('UiMainModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [UiMainModule, CommonModule, UiHeaderModule]
        }).compileComponents();
    }));

    it('should create', () => {
        expect(UiMainModule).toBeDefined();
    });
});
