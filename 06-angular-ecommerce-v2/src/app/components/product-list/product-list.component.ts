import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  //declare variable to put products data from product's service
  products: Product[] = [];

  //
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  currentCategoryName: string = '';
  searchMode: boolean = false;

  //for pagination support
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  //for paginatin support on serach products listing
  previousKeyword: string = '';

  //inject product service from services/product
  //by injecting the ActivatedRoute, angular will create instance of this component and render inside <router-outlet></router-outlet>
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  //this runs only once, good for data initialization, similar to @PostConstruct in spring boot
  //also now subscrbe the route param
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    //if we have different keyword than previous, we should set pagenumber to 1, i.e, new search has done
    if (theKeyword != this.previousKeyword) {
      this.thePageNumber = 1;
    }
    this.previousKeyword = theKeyword;

    this.productService
      .searchProductsPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        theKeyword
      )
      .subscribe(this.processResult());
  }

  handleListProducts() {
    //also check if id param is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id'); //here id is where we define in routes array inside app.module.ts

    //if there is hasCategoryId then we assign it to currentCategoryId declare above to make a dynamic component based on id value
    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
      // get the "name" param string
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
    } else {
      this.currentCategoryId = 1; //as we have already assigned value 1 during declaration
      this.currentCategoryName = 'Books'; //default to Books
    }

    //
    // Check if we have a different category than previous
    // Note: Angular will reuse a component if it is currently being viewed
    //

    // if we have a different category id than previous
    // then set thePageNumber back to 1
    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    console.log(
      `currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`
    );

    // now get the products for the given category id
    this.productService
      .getProductListPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        this.currentCategoryId
      )
      .subscribe(this.processResult());
  }

  updatePageSize(pageSize: string) {
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  processResult() {
    return (data: any) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }
}
