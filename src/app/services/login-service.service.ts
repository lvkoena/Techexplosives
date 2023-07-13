import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

    constructor(private http: HttpClient) {

    }

    login(email: string, password: string) {
        // Make an API request to fetch the user data
        this.http.get('http://localhost:3000/profile')
    }

}
