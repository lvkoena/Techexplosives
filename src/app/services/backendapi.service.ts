import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendapiService {
  


  constructor(private http:HttpClient) { }

  // Get all Http methods that make calls to our restful API
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
}

  // HTTP post request to the url server
  createUser(body:any) {
    return this.http.post('http://localhost:3000/profile', body);
  }
}
