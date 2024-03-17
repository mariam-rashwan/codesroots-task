import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../layouts/layout/layout.component').then(
        (c) => c.DoctorLayoutComponent
      ),
    children: [
      {
        path: '',
        component: AllProductsComponent,
        title: 'Products',
      },

      {
        path: '**',
        loadComponent: () =>
          import('../shared/not-found/not-found.component').then(
            (c) => c.NotFoundComponent
          ),
        title: 'Not Found',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
