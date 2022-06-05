import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3SearchComponent } from './d3-search.component';

describe('D3SearchComponent', () => {
  let component: D3SearchComponent;
  let fixture: ComponentFixture<D3SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
