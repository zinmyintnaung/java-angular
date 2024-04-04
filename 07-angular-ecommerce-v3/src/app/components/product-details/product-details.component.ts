import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  private productId: number = 1;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  handleProductDetails() {
    this.productId = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProductDetail(this.productId).subscribe((data) => {
      this.product = data;
    });
  }

  addToCart() {
    const theCartItem = new CartItem(
      this.product?.id!,
      this.product?.name!,
      this.product?.imageUrl!,
      this.product?.unitPrice!
    );
    this.cartService.addToCart(theCartItem);
  }
}
