import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/services/cart.service';
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

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts() {
        this.productService.getAllProducts().subscribe((products) => {
            this.products = products;
        });
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
