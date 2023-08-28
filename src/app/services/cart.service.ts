import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: string[] = [];
  private cartItemCountSubject = new BehaviorSubject<number>(0);

  constructor() { }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: string) {
    this.cartItems.push(item);
    this.updateCartItemCount();
  }

  removeFromCart(index: number){
    this.cartItems.slice(index, 1);
    this.updateCartItemCount();
  }

  getCartItemCount() {
    return this.cartItemCountSubject.asObservable();
  }

  updateCartItemCount() {
    this.cartItemCountSubject.next(this.cartItems.length);
  }

}
