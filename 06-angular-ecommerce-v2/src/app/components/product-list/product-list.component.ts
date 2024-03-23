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
    //also check if id param is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id'); //here id is where we define in routes array inside app.module.ts

    //if there is hasCategoryId then we assign it to currentCategoryId declare above to make a dynamic component based on id value
    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      this.currentCategoryId = 1; //as we have already assigned value 1 during declaration
    }

    //now we have to get the product according to the given category id
    this.productService
      .getProductList(this.currentCategoryId)
      .subscribe((data) => {
        this.products = data;
      });
  }
}
