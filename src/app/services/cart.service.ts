import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../interface/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private getAllCartProducts = 'https://fakestoreapi.com/carts';

  private cartItems: string[] = [];
  private cartItemCountSubject = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    //Load cart data from localStorage during service initialization
    this.loadCartData();
  }

  getAllCartDetails() {
    return this.http.get<Cart[]>(this.getAllCartProducts);
  }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: string) {
    this.cartItems.push(item);
    this.updateCartItemCount();
  }

  removeFromCart(index: number) {
    this.cartItems.slice(index, 1);
    this.updateCartItemCount();
  }

  getCartItemCount() {
    return this.cartItemCountSubject.asObservable();
  }

  updateCartItemCount() {
    this.cartItemCountSubject.next(this.cartItems.length);
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
