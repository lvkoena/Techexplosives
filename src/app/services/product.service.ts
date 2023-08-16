import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private getAll = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.getAll);
  }

  getOneProduct(id: number): Observable<any> {
    return this.http.get(`${this.getAll}/${id}`);
  }
}
