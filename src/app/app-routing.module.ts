import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'doctors', pathMatch: 'full' },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./doctors/doctors.module').then((m) => m.DoctorsModule),
  },

  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./shared/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
    title: 'Not Found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
