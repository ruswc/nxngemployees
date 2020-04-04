import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListComponent } from './employees-list.component';
import { MatListModule } from '@angular/material/list';
import { LoaderComponent } from '../loader/loader.component';
import { MatIconModule } from '@angular/material/icon';
import { SortDescendingPipe } from './pipes/sort-descending.pipe';
import { SortAscendingPipe } from './pipes/sort-ascending.pipe';
import { RouterModule } from '@angular/router';
import { MatSpinner } from '@angular/material/progress-spinner';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';

describe('EmployeesListComponent', () => {
    let component: EmployeesListComponent;
    let fixture: ComponentFixture<EmployeesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EmployeesListComponent,
                LoaderComponent,
                SortDescendingPipe,
                SortAscendingPipe,
                MatSpinner
            ],
            imports: [
                MatListModule,
                MatIconModule,
                RouterModule,
                HttpClientTestingModule,
                MatCardModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
