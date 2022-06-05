import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLibraryComponent } from './sample-library.component';

describe('SampleLibraryComponent', () => {
  let component: SampleLibraryComponent;
  let fixture: ComponentFixture<SampleLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
