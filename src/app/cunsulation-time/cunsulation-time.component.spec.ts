import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CunsulationTimeComponent } from './cunsulation-time.component';

describe('CunsulationTimeComponent', () => {
  let component: CunsulationTimeComponent;
  let fixture: ComponentFixture<CunsulationTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CunsulationTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CunsulationTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
