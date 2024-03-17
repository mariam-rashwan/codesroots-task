import { Component } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { Apollo } from 'apollo-angular';
import { GET_PRODUCTS } from '../../core/services/product.graphql';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent {
  products: Product[] = [];
  error:any[]=[];
  constructor(private _apollo:Apollo){}

  ngOnInit(): void {
  this.getProducts();
  }

  getProducts(){
    this._apollo.watchQuery({
      query: GET_PRODUCTS
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.products = data.products;
      console.log(this.products);
      console.log(error);

      this.error = error;
  }
  );
  }

}
