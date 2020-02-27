import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NgbdTableComplete } from './tables.component';
import { NgbdTableCompleteModule } from '../tables/tables.module';

describe('NgbdTableComplete', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbdTableCompleteModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(NgbdTableComplete);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
