import { async, TestBed } from '@angular/core/testing';
import { UiMainModule } from './ui-main.module';
import { CommonModule } from '@angular/common';
import { UiHeaderModule } from '@nxngemployees/ui-header';
import { UiEmployeesModule } from '@nxngemployees/ui-employees';
import { AppRoutingModule } from './app-routing.module';

describe('UiMainModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                UiMainModule,
                CommonModule,
                UiHeaderModule,
                UiEmployeesModule,
                AppRoutingModule
            ]
        }).compileComponents();
    }));

    it('should create', () => {
        expect(UiMainModule).toBeDefined();
    });
});
