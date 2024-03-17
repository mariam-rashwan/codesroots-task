import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../core/services/doctor.service';
import { Doctor } from '../../core/interfaces/doctor';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrl: './all-doctors.component.css',
})
export class AllDoctorsComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(private _doctorService: DoctorService) {}
  
  ngOnInit(): void {
     this.getDoctors();
    this.getDoctorsLocal();
  }

  getDoctors(): void {
    this._doctorService.getDoctors().subscribe({
      next: (response) => {
        console.log(response.data);
        // this.treindingMovies = response.results.slice(0, 10);
      },
      error: (error) => {
        console.log("error",error);
      }
    });
  }

  getDoctorsLocal(): void {
    this.doctors = this._doctorService.getDoctorsLocalDatat();
    //  console.log("this.doctors local",this.doctors);
  }
}
