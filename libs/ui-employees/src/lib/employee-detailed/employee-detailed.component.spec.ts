import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailedComponent } from './employee-detailed.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LoaderComponent } from '../loader/loader.component';

describe('EmployeeDetailedComponent', () => {
  let component: EmployeeDetailedComponent;
  let fixture: ComponentFixture<EmployeeDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDetailedComponent, LoaderComponent],
      imports: [MatListModule, MatIconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
