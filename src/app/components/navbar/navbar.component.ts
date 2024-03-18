import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    products: Product[] = [];
    searchQuery: string = '';
    searchResults: any[] = []; 
    cartItemCount: number = 0; 

    constructor(
        private productService: ProductService,
        private cartService: CartService
    ) { }

    ngOnInit(): void {
        this.cartCount();
    }


     //Function to handle cart item count
     cartCount() {
        this.cartService
            .getCartItemCount()
            .subscribe((count) => (this.cartItemCount = count));
    }

    logout() {
        
    }
}
