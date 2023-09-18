import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  products: Product[] = [];


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  //Function to handle search
  onSearch(query: string) {
    if(query.trim() !== '') {
      this.productService.searchProducts(query).subscribe(products =>{
        this.products = products;
      });
    }else{
      //If the search input is empty, load all products
      this.productService.getAllProducts().subscribe(products =>{
        this.products = products;
      });
    }
  }
}
