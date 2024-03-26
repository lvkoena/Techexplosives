import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    products: any;
    product: any;

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.cartService.getCartItemCount().subscribe(product => {
            this.products = product;
          });
    }

    checkout() {
      
    }

}
