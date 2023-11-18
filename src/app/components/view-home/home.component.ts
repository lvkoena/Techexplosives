import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

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