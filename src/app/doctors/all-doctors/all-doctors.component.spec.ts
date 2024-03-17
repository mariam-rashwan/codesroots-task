import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDoctorsComponent } from './all-doctors.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DoctorService } from '../../core/services/doctor.service';
import { of } from 'rxjs';

describe('AllDoctorsComponent', () => {
  let component: AllDoctorsComponent;
  let fixture: ComponentFixture<AllDoctorsComponent>;
  let doctorService: jasmine.SpyObj<DoctorService>;

  beforeEach(async () => {
    doctorService = jasmine.createSpyObj('DoctorService', ['getDoctors', 'getDoctorsLocalDatat']);

    await TestBed.configureTestingModule({
      declarations: [AllDoctorsComponent],
      providers: [{ provide: DoctorService, useValue: doctorService }],
      imports: [HttpClientTestingModule,RouterTestingModule]

    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllDoctorsComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create all Doctors', () => {
    expect(component).toBeTruthy();
  });


  it('should call getDoctors on ngOnInit', () => {
    // Arrange
    doctorService.getDoctors.and.returnValue(of({ data: [] }));

    // Act
    component.ngOnInit();

    // Assert
    expect(doctorService.getDoctors).toHaveBeenCalled();

});

});

