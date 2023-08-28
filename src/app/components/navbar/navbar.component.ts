import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  cartItemCount: number = 0; // initialize cart item count to 0

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getCartItemCount().subscribe(count =>{
      this.cartItemCount = count;
    });
  }

}
