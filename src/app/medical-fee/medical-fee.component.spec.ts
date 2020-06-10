import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFeeComponent } from './medical-fee.component';

describe('MedicalFeeComponent', () => {
  let component: MedicalFeeComponent;
  let fixture: ComponentFixture<MedicalFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
