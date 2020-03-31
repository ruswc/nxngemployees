import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EmployeeDetailedComponent } from './employee-detailed.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LoaderComponent } from '../loader/loader.component';
import { DetailedMatListItemComponent } from './detailed-mat-list-item/detailed-mat-list-item.component';

import { EmployeesListComponent } from '../employees-list/employees-list.component';
import { SortDescendingPipe } from '../employees-list/pipes/sort-descending.pipe';
import { SortAscendingPipe } from '../employees-list/pipes/sort-ascending.pipe';
import { MatSpinner } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

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
        RouterTestingModule
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

/*
describe('EmployeesDetailedComponent', () => {
  let component: EmployeeDetailedComponent;
  let fixture: ComponentFixture<EmployeeDetailedComponent>;

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
        HttpClientTestingModule
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
});*/
