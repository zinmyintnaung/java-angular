import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  //inject http client so that we can consume backend api
  constructor(private httpClient: HttpClient) {}

  //implement the observable method to fetch data from baseUrl
  getProductList(theCategoryId: number): Observable<Product[]> {
    //@todo: need to build a url based on given category id

    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(
        map(
          (response: { _embedded: { products: any } }) =>
            response._embedded.products
        )
      );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  };
}
