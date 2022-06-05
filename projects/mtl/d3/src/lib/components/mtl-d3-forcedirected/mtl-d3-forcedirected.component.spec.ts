import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtlD3ForcedirectedComponent } from './mtl-d3-forcedirected.component';

describe('MtlD3ForcedirectedComponent', () => {
  let component: MtlD3ForcedirectedComponent;
  let fixture: ComponentFixture<MtlD3ForcedirectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtlD3ForcedirectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtlD3ForcedirectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
