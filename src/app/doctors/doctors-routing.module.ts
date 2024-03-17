import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

const routes: Routes = [
  {path:'',redirectTo:"all",pathMatch:"full"},
  {
    path: '',
    loadComponent: () =>
    import('../layouts/layout/layout.component').then(
      (c) => c.DoctorLayoutComponent
    ),
    children: [
      {
        path:'all',
        component: AllDoctorsComponent,title:'All Doctors'
      },
      {
        path:'details/:id',
        component:DoctorDetailsComponent,title:'Doctor Details'
      },

      {path:"swipper",loadComponent: () =>import('./doctor-scheduales/doctor-scheduales.component').then((c) => c.DoctorSchedualesComponent
      ),title:"Contact US"},



      {path:"contacts",loadComponent: () =>import('../shared/contact-us/contact-us.component').then((c) => c.ContactUsComponent
      ),title:"Contact US"},




      {path:"**",loadComponent: () =>import('../shared/not-found/not-found.component').then((c) => c.NotFoundComponent
      ),title:"Not Found"}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
