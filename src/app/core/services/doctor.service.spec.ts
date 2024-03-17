import { TestBed } from '@angular/core/testing';

import { DoctorService } from './doctor.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { data } from '../../doctors/doctorsLocalData';

describe('DoctorService', () => {
  let service: DoctorService;
  let httpTestingController: HttpTestingController;
  let myData= data;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DoctorService],
    });
    service = TestBed.inject(DoctorService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

    it('should return local doctors data', () => {
    const localData = service.getDoctorsLocalDatat();
    expect(localData).toEqual(myData);
  });


  it('should return doctor details', () => {
    const doctorId = '659dd73da053d5c2d12db6ce';
    const doctorDetails = service.getDoctorDetails(doctorId);
    const expectedDetails = data.filter((item) => item._id === doctorId);
    expect(doctorDetails).toEqual(expectedDetails);
  });
  
  
});
