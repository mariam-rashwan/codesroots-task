import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorDetailsComponent } from './doctor-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DoctorInfoComponent } from '../doctor-info/doctor-info.component';
import { FullNamePipe } from '../../core/pipes/full-name.pipe';
import { CategoryComponent } from '../category/category.component';
import { DoctorSchedualesComponent } from '../doctor-scheduales/doctor-scheduales.component';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../core/services/doctor.service';

describe('DoctorDetailsComponent', () => {
  let component: DoctorDetailsComponent;
  let fixture: ComponentFixture<DoctorDetailsComponent>;
  let activatedRoute: ActivatedRoute;
  let doctorService: jasmine.SpyObj<DoctorService>;


  beforeEach(async () => {
    doctorService = jasmine.createSpyObj('DoctorService', ['getDoctorDetails']);
    await TestBed.configureTestingModule({
      declarations: [DoctorDetailsComponent,DoctorInfoComponent,FullNamePipe,
        CategoryComponent,DoctorSchedualesComponent],
        
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [
        { provide: DoctorService, useValue: doctorService },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '65ad6251c4d5a2a836c60ff9' } } } }
      ]

    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorDetailsComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    //  fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getDoctorsLocal on ngOnInit', () => {
    // Arrange
    const doctorDetails: any[] = [
      {
        _id: "65ad6251c4d5a2a836c60ff9",
        email: "hossamxp33@gmail.com",
        first_name: "waleed",
        last_name: "altahlawy",
        mobile: "01141087755",
        gender: "male",
        address: "15 abd allah selim",
        price: 400,
    }
    ]; // Mock doctor details
    doctorService.getDoctorDetails.and.returnValue(doctorDetails);

    // Act
    component.ngOnInit();

    // Assert
    expect(component.doctors).toEqual(doctorDetails); // Verify that doctors property is initialized with doctor details
    expect(doctorService.getDoctorDetails).toHaveBeenCalledWith('65ad6251c4d5a2a836c60ff9'); // Verify that getDoctorDetails method is called with the correct id
  });
 
});
