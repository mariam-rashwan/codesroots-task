import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoctorHeaderComponent } from '../../core/components/doctor-header/doctor-header.component';
import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,DoctorHeaderComponent,FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class DoctorLayoutComponent {

}
