import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './home-data.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService, private router: Router) { }

    ngOnInit() {
        this.allProducts();
    }

    allProducts() {
        this.productService.getAllProducts().subscribe(
            (products: Product[]) => {
                this.products = products;
            },
            error => {
                console.error('Error fetching products: ', error);
            }
        );
    }

    navigateToProductDetails(id: number) {
        this.router.navigate(['product-details/' + id]);
    }
}