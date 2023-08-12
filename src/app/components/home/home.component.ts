import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    products: Product[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getAllProducts().subscribe(
            (products: Product[]) => {
                this.products = products;
            },
            error => {
                console.error('Error fetching products: ', error);
            }
        );
    }

    
}