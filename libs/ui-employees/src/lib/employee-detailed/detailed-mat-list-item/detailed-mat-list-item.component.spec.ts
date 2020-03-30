import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedMatListItemComponent } from './detailed-mat-list-item.component';

import { MatListModule } from '@angular/material/list';

describe('DetailedMatListItemComponent', () => {
  let component: DetailedMatListItemComponent;
  let fixture: ComponentFixture<DetailedMatListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedMatListItemComponent],
      imports: [MatListModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedMatListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
