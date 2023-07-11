import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

    // private loggedInUserSubject: BehaviorSubject<Users | null> = new BehaviorSubject<Users | null>(null);
    // private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
    // constructor(private http: HttpClient) {}
  
    // login(email: string, password: string): Observable<void> {
    //   return this.http
    //     .get<Users[]>('http://localhost:3000/profile')
    //     .pipe(
    //       map(users => this.findMatchingUser(users, email, password)),
    //       catchError(() => {
    //         this.loggedInUserSubject.next(null);
    //         return [];
    //       }),
    //       map(matchingUser => this.handleLoginResult(matchingUser))
    //     );
    // }
  
    // private findMatchingUser(users: Users[], email: string, password: string): Users | null {
    //   return users.find(user => user.email === email && user.password === password) || null;
    // }
  
    // private handleLoginResult(matchingUser: Users | null): void {
    //   if (matchingUser) {
    //     this.loggedInUserSubject.next(matchingUser);
    //   } else {
    //     this.loggedInUserSubject.next(null);
    //   }
    //   this.loggedIn$.next(true);
    // }
  
    // getLoggedInUser(): Observable<Users | null> {
    //   return this.loggedInUserSubject.asObservable();
    // }
  
    // isLoggedIn(): Observable<boolean> {
    //   return this.loggedIn$.asObservable();
    // }
}
