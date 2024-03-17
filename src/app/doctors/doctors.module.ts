import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { FullNamePipe } from '../core/pipes/full-name.pipe';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { CategoryComponent } from './category/category.component';
import { DoctorSchedualesComponent } from './doctor-scheduales/doctor-scheduales.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';


@NgModule({
  declarations: [
    AllDoctorsComponent,
    FullNamePipe,
    DoctorDetailsComponent,
    CategoryComponent,
    DoctorSchedualesComponent,
    DoctorInfoComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    
    
    
  ]
  
})
export class DoctorsModule { }
