import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EmployeeDetailedComponent } from './employee-detailed.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LoaderComponent } from '../loader/loader.component';
import { DetailedMatListItemComponent } from './detailed-mat-list-item/detailed-mat-list-item.component';

import { MatSpinner } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

describe('EmployeeDetailedComponent', () => {
    let component: EmployeeDetailedComponent;
    let fixture: ComponentFixture<EmployeeDetailedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EmployeeDetailedComponent,
                LoaderComponent,
                DetailedMatListItemComponent,
                MatSpinner
            ],
            imports: [
                MatListModule,
                MatIconModule,
                HttpClientTestingModule,
                RouterTestingModule,
                MatCardModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeDetailedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
