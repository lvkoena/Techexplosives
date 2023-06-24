import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendapiService {
  


  constructor(private http:HttpClient) { }

  getAllProducts() {
    throw new Error('Method not implemented.');
}

  // HTTP post request to the url server
  createUser(body:any) {
    return this.http.post('http://localhost:3000/profile', body);
  }
}
