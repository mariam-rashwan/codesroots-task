import { Component } from '@angular/core';
import { DoctorService } from '../../core/services/doctor.service';
import { Doctor } from '../../core/interfaces/doctor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.css'
})
export class DoctorDetailsComponent {
  doctors: Doctor[] = [];
  id!:string;

  constructor(private _doctorService: DoctorService,private _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id') || '' ;

  }
  
  ngOnInit(): void {
  
    this.getDoctorsLocal();
  }

  getDoctorsLocal(): void {
    console.log(this.id)
    this.doctors = this._doctorService.getDoctorDetails(this.id);
   console.log("this.doctors Details local",this.doctors);
  }
}
