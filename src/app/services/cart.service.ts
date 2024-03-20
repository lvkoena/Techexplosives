import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cartItems: string[] = [];
  private cartItemCountSubject = new BehaviorSubject<any[]>([]);

  constructor() {
    //Load cart data from localStorage during service initialization
    this.loadCartData();
  }

  addToCart(item: string) {
    this.cartItems.push(item);
    this.cartItemCountSubject.next([...this.cartItems]);
    this.updateCartItemCount();
  }

  getCartItemCount() {
    return this.cartItemCountSubject.asObservable();
  }

  updateCartItemCount() {
    this.saveCartData();
  }

  saveCartData() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  loadCartData() {
    const cartData = localStorage.getItem('cartItems');
    if (cartData) {
      this.cartItems = JSON.parse(cartData);
      this.updateCartItemCount();
    }
  }
}
