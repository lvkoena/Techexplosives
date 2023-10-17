import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cart: any;
    id: any;

    constructor(private cartService: CartService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.oneCartDetail();
    }

    //fetch one cart detail from the services
    oneCartDetail(){
        if(this.id = this.route.snapshot.paramMap.get('id')) {
            this.cartService.getOneCartDetail(this.id).subscribe((res) => {
                this.cart = res
            });

        }
    }

}
