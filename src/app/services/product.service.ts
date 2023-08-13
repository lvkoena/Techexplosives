import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private getAll = 'https://fakestoreapi.com/products';
  private getOne = 'https://fakestoreapi.com/products/1';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.getAll);
  }

  getOneProduct() {
    return this.http.get<Product[]>(this.getOne)
  }
}
