import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apollo: Apollo) {}

  getProducts(categoryId: string): Observable<any> {
    const GET_PRODUCTS = gql`
      query GetProducts($categoryId: String!) {
        products(category_id: $categoryId) {
          id
          name_en
          photo
          short_description_en
          price
          attributes {
            id
          }
          category {
            name_en
            id
          }
        }
      }
    `;
    return this.apollo.query({
      query: GET_PRODUCTS,
      variables: {
        categoryId: categoryId,
      },
    });
  }

  getCategory(): Observable<any> {
    const GET_CATEGORY = gql`
      query GetCategories {
        products {
          category {
            name_en
            id
          }
        }
      }
    `;
    return this.apollo.query({
      query: GET_CATEGORY,
    });
  }
}
