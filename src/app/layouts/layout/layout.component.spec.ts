import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { DoctorLayoutComponent } from './layout.component';

describe('DoctorLayoutComponent', () => {
  let component: DoctorLayoutComponent;
  let fixture: ComponentFixture<DoctorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorLayoutComponent,RouterTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DoctorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
