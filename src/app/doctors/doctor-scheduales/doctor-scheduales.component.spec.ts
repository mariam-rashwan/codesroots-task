import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSchedualesComponent } from './doctor-scheduales.component';

describe('DoctorSchedualesComponent', () => {
  let component: DoctorSchedualesComponent;
  let fixture: ComponentFixture<DoctorSchedualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorSchedualesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorSchedualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
