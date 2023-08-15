import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService){

  }

  ngOnInit(){
    this.individualProduct();
  }

  individualProduct():void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.productService.getOneProduct(id).subscribe(
      (data) => {
        this.product = data;
      },
      (error) =>{
        console.error('Error fetching product:', error);
      }
    );
  }

}
