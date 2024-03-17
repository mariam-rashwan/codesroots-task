import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorHeaderComponent } from './doctor-header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DoctorHeaderComponent', () => {
  let component: DoctorHeaderComponent;
  let fixture: ComponentFixture<DoctorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorHeaderComponent,HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorHeaderComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

  });

  it('header should create', () => {
    expect(component).toBeTruthy();
  });
});
