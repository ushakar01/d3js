import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibD3Component } from './lib-d3.component';

describe('LibD3Component', () => {
  let component: LibD3Component;
  let fixture: ComponentFixture<LibD3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibD3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
