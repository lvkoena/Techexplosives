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
    searchResults: any[] = []; //Initialize an array to store search results
    cartItemCount: number = 0; //Initialize cart item count to 0

    constructor(private productService: ProductService, private cartService: CartService) { }

    ngOnInit(): void {
        this.cartCount();
        this.searchProducts();
    }

    searchProducts() {
        this.productService.getAllProducts().subscribe((products) => {
            this.products = products;
        });
    }


    //Function to handle cart item count
    cartCount() {
        this.cartService.getCartItemCount().subscribe(count => 
            this.cartItemCount = count
            );
    }

    //Function to handle search functionality as the user types
    onSearch() {
        //Filter items based on the search query
        this.searchResults = this.products.filter((item) =>
            item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );

        // Log the search results to the console
    console.log('Search Results:', this.searchResults);
    }
}
