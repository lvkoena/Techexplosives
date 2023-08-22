import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any [] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  private quantitySubject = new BehaviorSubject<number>(0);
  private countSubject = new BehaviorSubject<number>(0);
  private totalPriceSubject = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(product: any) {
    // const cartItem = this.cartItems.find(); 
  }
}
