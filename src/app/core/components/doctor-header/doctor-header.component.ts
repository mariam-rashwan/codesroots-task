import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctor-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './doctor-header.component.html',
  styleUrl: './doctor-header.component.css'
})
export class DoctorHeaderComponent {

}
