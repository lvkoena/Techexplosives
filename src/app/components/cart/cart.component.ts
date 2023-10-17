import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/interface/cart';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    carts: Cart[] = [];

    constructor(private cartService: CartService, private router: Router) {}

    ngOnInit(): void {
        this.allCartDetails();
    }

    allCartDetails(){
        this.cartService.getAllCartDetails().subscribe(
            (carts: Cart[]) => {
                this.carts = carts;
            },
            error => {
                console.error('Error fetching cart details: ', error);
            }
        );
    }

    navigateToCheckout(id: number) {
        this.router.navigate(['checkout/' + id]);
    }

}
