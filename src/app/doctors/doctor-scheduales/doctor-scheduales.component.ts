import { Component, Input } from '@angular/core';
import { Schedule } from '../../core/interfaces/schedule';


@Component({
  selector: 'app-doctor-scheduales',
  templateUrl: './doctor-scheduales.component.html',
  styleUrl: './doctor-scheduales.component.css',
})
export class DoctorSchedualesComponent {
  @Input('schedule') item?:Schedule;


}
