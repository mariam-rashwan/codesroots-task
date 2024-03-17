import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductComponent } from './product/product.component';
import { TruncatePipe } from '../core/pipes/truncate.pipe';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
