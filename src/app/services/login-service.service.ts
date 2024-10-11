import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginServiceService {
    private loggedIn$ = new BehaviorSubject<boolean>(false);
    private loggedInUserSubject = new BehaviorSubject<any>(null);
    loggedInUser$ = this.loggedInUserSubject.asObservable();

    constructor(private http: HttpClient, private router: Router, private CartService: CartService) { }

    get isLoggedIn() {
        return this.loggedIn$.asObservable();
    }

    login(email: string, password: string) {
        this.http.get<any>('http://localhost:3000/profile').subscribe(users => {
            const matchingUser = users.find((user: { email: string; password: string; }) => user.email === email && user.password === password);
            if (matchingUser) {
                this.loggedInUserSubject.next(matchingUser);
            } else {
                this.loggedInUserSubject.next(null);
            }
        });

        this.loggedIn$.next(true);
    }

    logout() {
        // Perform logout logic, e.g., clearing session data
        // Once logout is completed, set loggedIn$ to false

        this.loggedInUserSubject.next(null);
        this.loggedIn$.next(false);
        // this.CartService.clearCart();
        this.router.navigate([""]);
    }
}
