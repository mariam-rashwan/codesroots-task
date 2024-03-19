import { Component, Input } from '@angular/core';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input('product') prod!: Product;

  // notFoundPhoto='../../../assets/images/product.jpg'

  onImgError(event: any) {
    event.target.src = 'assets/images/product.jpg';
  }
}
