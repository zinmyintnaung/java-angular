import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';
  private categoryUrl = 'http://localhost:8080/api/product-category';

  //inject http client so that we can consume backend api
  constructor(private httpClient: HttpClient) {}

  //implement the observable method to fetch data from baseUrl
  getProductList(theCategoryId: number): Observable<Product[]> {
    //build a url based on given category id, here we are making use of spring boot's spring data REST query method feature
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getProducts(searchUrl);
  }

  getProductListPaginate(
    thePage: number,
    thePageSize: number,
    theCategoryId: number
  ): Observable<GetResponseProducts> {
    //build a url based on given category id, here we are making use of spring boot's spring data REST query method feature
    //page and size are params to implement pagination
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  searchProducts(searchKeyword: string): Observable<Product[]> {
    //build a url based on keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${searchKeyword}`;
    return this.getProducts(searchUrl);
  }

  searchProductsPaginate(
    thePage: number,
    thePageSize: number,
    searchKeyword: string
  ): Observable<GetResponseProducts> {
    //build a url based on given category id, here we are making use of spring boot's spring data REST query method feature
    //page and size are params to implement pagination
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${searchKeyword}&page=${thePage}&size=${thePageSize}`;
    console.log(searchUrl);
    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  private getProducts(url: string): Observable<Product[]> {
    return this.httpClient
      .get<GetResponseProducts>(url)
      .pipe(
        map(
          (response: { _embedded: { products: any } }) =>
            response._embedded.products
        )
      );
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient
      .get<GetResponseProductCategory>(this.categoryUrl)
      .pipe(
        map(
          (response: { _embedded: { productCategory: any } }) =>
            response._embedded.productCategory
        )
      );
  }

  getProductDetail(productId: number): Observable<Product> {
    //build a url based on product id
    const productUrl = `${this.baseUrl}/${productId}`;

    return this.httpClient.get<Product>(productUrl);
  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
