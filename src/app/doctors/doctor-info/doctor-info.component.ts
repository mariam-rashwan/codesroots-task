import { Component, Input } from '@angular/core';
import { DoctorInfo } from '../../core/interfaces/doctor-info';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrl: './doctor-info.component.css'
})
export class DoctorInfoComponent {
  @Input('doctorInfo') doctors?:DoctorInfo 

  constructor(){
    // console.log(this.doctors);

  }
  
}
