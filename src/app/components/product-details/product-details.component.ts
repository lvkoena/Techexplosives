import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product: any;
  id: any;

  constructor(private productService: ProductService, private cartService: CartService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.individualProduct();
  }

  // fetch individual product from product services
  individualProduct() {
    if(this.id = this.route.snapshot.paramMap.get('id')) {
      this.productService.getOneProduct(this.id).subscribe((res) =>{
        this.product = res;
      });
    }
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}
