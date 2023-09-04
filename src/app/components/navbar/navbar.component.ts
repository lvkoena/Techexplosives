import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  cartItemCount: number = 0;
  searchQuery: string = '';
  @Output() searchQueryChange = new EventEmitter<string>();

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getCartItemCount().subscribe(count =>{
      this.cartItemCount = count;
    });
  }

  onSearch(): void {
    this.searchQueryChange.emit(this.searchQuery);
  }

}
