import { AfterViewInit, Component, OnInit, ViewChildren } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { ProductService } from '../../core/services/product.graphql';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  Categories: Product[] = [];
  catagoryValue: string = '50';
  error: any;
  categoryName!: string;
  constructor(private _ProductService: ProductService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  onChangeCategory(event: any) {
    console.log(event.target.value);
    this.catagoryValue = event.target.value;
    this.getProducts();
  }
  getCategories() {
    this._ProductService.getCategory().subscribe((result) => {
      this.Categories = result.data.products;
      this.Categories = this.Categories.filter(
        (product) => product.category !== null
      ).map((product) => product);
      console.log(this.Categories);
    });
  }

  getProducts() {
    this._ProductService.getProducts(this.catagoryValue).subscribe((result) => {
      this.products = result.data.products;
      this.categoryName = this.products[0].category.name_en;
      console.log(this.products);
    });
  }
}
