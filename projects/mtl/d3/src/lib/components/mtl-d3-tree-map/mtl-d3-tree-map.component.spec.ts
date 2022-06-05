import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtlD3TreeMapComponent } from './mtl-d3-tree-map.component';

describe('MtlD3TreeMapComponent', () => {
  let component: MtlD3TreeMapComponent;
  let fixture: ComponentFixture<MtlD3TreeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtlD3TreeMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtlD3TreeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
