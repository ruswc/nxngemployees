import { async, TestBed } from '@angular/core/testing';
import { UiHeaderModule } from './ui-header.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

describe('UiHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiHeaderModule, MatToolbarModule, MatIconModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiHeaderModule).toBeDefined();
  });
});
