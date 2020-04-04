import { async, TestBed } from '@angular/core/testing';
import { UiEmployeesModule } from './ui-employees.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('UiEmployeesModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                UiEmployeesModule,
                CommonModule,
                MatIconModule,
                MatListModule,
                HttpClientModule,
                MatButtonModule,
                MatProgressSpinnerModule
            ]
        }).compileComponents();
    }));

    it('should create', () => {
        expect(UiEmployeesModule).toBeDefined();
    });
});
